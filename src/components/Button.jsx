import React from 'react'

const Button = ({ count, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>click me {count}</button>
        </div>
    )
}

export default Button