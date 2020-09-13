import React from 'react';

export default function ({ countries, onChange }) {
    return (
        <select multiple onChange={onChange}>
            {countries.map(({ Country: country, Slug: slug, ISO2: iso2 }) => (
                <option key={iso2} value={slug}>{country}</option>
            ))}
        </select>
    );
}