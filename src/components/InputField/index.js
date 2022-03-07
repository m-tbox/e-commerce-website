import React from 'react'
import './styles.css';

function InputField({ title, value, type, onChange }) {
    return (
        <div className="inputField">
            <h5> {title} </h5>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField