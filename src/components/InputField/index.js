import React from 'react'
import './styles.css';

function InputField({ title, value, type, onChange, error, errorMsg }) {

    console.log('HIr INout', error)
    return (
        <div className="inputField">
            <h5> {title} </h5>
            <input
                className={`inputField__input ${error ? "inputField__error" : ""}`}
                type={type}
                value={value}
                onChange={onChange}
            />

            {
                error &&
                <div className="inputField__errorContainer">
                    <small className="inputField__errorMsg">
                        {errorMsg}
                    </small>
                </div>
            }
        </div>
    )
}

export default InputField