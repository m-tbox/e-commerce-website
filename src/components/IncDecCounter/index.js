import React from 'react';
import './styles.css';

function IncDecCounter({ number, decNumber, incNumber }) {
    return (
        <div className="incDecCounter">
            <div class="incDecCounter__button" onClick={decNumber}>
                -
            </div>
            <p> {number} </p>
            <div class="incDecCounter__button" onClick={incNumber}>
                +
            </div>
        </div>
    )
}

export default IncDecCounter