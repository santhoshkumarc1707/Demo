import React, { useState } from 'react'

const Selection = () => {
    const [datas, setDatas] = useState('1');
    const handleChange = (e) => {
        setDatas(e.target.value)
    }
    return (
        <div>
            <form >
                <select value={datas} onChange={handleChange}>
                    <option value='1' >one</option>
                    <option value='2'>two</option>

                </select>
                
            </form>
        </div>
    )
}

export default Selection