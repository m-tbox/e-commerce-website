import React from 'react'
import './styles.css'

function Button({ title, onClick, style, type }) {
    return (
        <button
            className="button"
            onClick={onClick}
            style={style}
            type={type}
        >
            {title}
        </button>
    )
}

export default Button