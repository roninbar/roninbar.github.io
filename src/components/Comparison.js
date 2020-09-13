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

                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },

                subtitle: {
                    text: 'Source: thesolarfoundation.com'
                },

                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },

                xAxis: {
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

                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }],

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
            this.setState({ countries });
        }
    }

    async componentDidUpdate(prevProps, { selectedCountries: prevSelected }) {
        const { selectedCountries: currSelected, chartOptions: { series } } = this.state;
        const newlySelected = _.difference(currSelected, prevSelected);
        const noLongerSelected = _.difference(prevSelected, currSelected);
        if (noLongerSelected.length > 0 || newlySelected.length > 0) {
            const newCountriesData = await Promise.all(newlySelected.map(country =>
                fetch(`https://api.covid19api.com/country/${country}/status/deaths`)
                    .then(response => response.ok ? response.json() : [])));
            this.setState({
                chartOptions: {
                    series: [
                        ...series.filter(({ id }) => currSelected.includes(id)),
                        ...newCountriesData.map((countryData, i) => ({
                            id: newlySelected[i],
                            name: countryData[0].Country,
                            data: countryData.map(({ Date: date, Cases: cases }) => [date, cases]),
                        })),
                    ],
                },
            });
        }
    }

}

