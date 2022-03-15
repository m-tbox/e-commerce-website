import React from 'react'
import './styles.css'

function Button({ title, onClick, style, type, ...rest }) {
    return (
        <button
            className="button"
            onClick={onClick}
            style={style}
            type={type}
            {...rest}
        >
            {title}
        </button>
    )
}

export default Button