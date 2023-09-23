import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select style={{
            padding: "5px",
            color: "teal",
            border: "1px solid teal",
            borderRadius: "5px",
            backgroundColor: "aliceblue"
        }}
                onChange={event => onChange(event.target.value)}
                value={value}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default MySelect;