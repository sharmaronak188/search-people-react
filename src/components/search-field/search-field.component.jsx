import React from 'react';

import './search-field.styles.css';

export const SearchField = ({ placeholder, handleChange }) => (
    <div className="search-field">
        <input
            type="text"
            className="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
);