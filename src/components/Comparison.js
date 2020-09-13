import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import CountriesSelect from './CountriesSelect';

export default class Comparison extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selectedCountries: [],
            chartOptions: {

                chart: {
                    width: 1280,
                },

                title: {
                    text: 'COVID-19 Deaths'
                },

                subtitle: {
                    text: 'Source: covid19api.com'
                },

                yAxis: {
                    title: {
                        text: 'Deaths / 1M'
                    }
                },

                xAxis: {
                    type: 'datetime',
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2017'
                    }
                },

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },

                series: [],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }

            },
        };
    }

    onChangeSelection({ target }) {
        this.setState({
            selectedCountries: Array.prototype
                .filter.call(target, ({ selected }) => selected)
                .map(({ value }) => value),
        });
    }

    render() {
        const { countries, chartOptions } = this.state;
        return (
            <Fragment>
                <CountriesSelect countries={countries} onChange={this.onChangeSelection.bind(this)} />
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Fragment>
        );
    }

    async componentDidMount() {
        const response = await fetch('https://api.covid19api.com/countries');
        if (response.status === 200) {
            const countries = await response.json();
            countries.sort(({ Country: a }, { Country: b }) => a < b ? -1 : +1);
            this.setState({ countries });
        }
    }

    async componentDidUpdate(prevProps, { selectedCountries: prevSelected }) {
        const { countries, selectedCountries: currSelected, chartOptions: { series } } = this.state;
        const newlySelected = _.difference(currSelected, prevSelected);
        const noLongerSelected = _.difference(prevSelected, currSelected);
        if (noLongerSelected.length > 0 || newlySelected.length > 0) {
            const responseJson = response => response.ok ? response.json() : [];
            const codes = countries
                .filter(({ Slug: slug }) => newlySelected.includes(slug))
                .map(({ ISO2: code }) => code);
            const newCountriesResponse = fetch(`https://restcountries.eu/rest/v2/alpha?codes=${codes.join(';').toLowerCase()}`).then(responseJson);
            const newCountriesCovidResponse = Promise.all(newlySelected.map(country => fetch(`https://api.covid19api.com/total/country/${country}/status/deaths`).then(responseJson)));
            const newCountriesData = await newCountriesResponse;
            const newCountriesCovidData = await newCountriesCovidResponse;
            this.setState({
                chartOptions: {
                    series: [
                        ...series.filter(({ id }) => currSelected.includes(id)),
                        ...newCountriesCovidData.map((countryData, i) => {
                            const { population } = newCountriesData[i];
                            const { Country: name } = this.state.countries.find(({ Slug: slug }) => slug === newlySelected[i]);
                            return {
                                id: newlySelected[i],
                                name: name,
                                data: countryData.map(({ Date: date, Cases: cases }) => [Date.parse(date), cases / population * 1000000]),
                            };
                        }),
                    ],
                },
            });
        }
    }

}

