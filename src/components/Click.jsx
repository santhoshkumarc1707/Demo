import React, { useState } from 'react'
import Button from './Button';

const Click = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);

    }
    return (
        <div>
            <Button count={count} onClick={handleClick} />
        </div>
    )
}

export default Click