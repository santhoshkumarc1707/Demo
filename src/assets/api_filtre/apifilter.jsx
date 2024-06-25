import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import './apifilter.css'

const apifilter = () => {
    const [search, setSearch] = useState('');

    const [api, setApi] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const getAPIData = useCallback((query) => {
        fetch(`https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${query}`)
            .then(Response => Response.json())
            .then((data) => { setApi(data) })
            .catch((err) => { console.log(err.message); })
    }, []);

    const onsubmit = (e) => {
        e.preventDefault()
        getAPIData(search);
    }

    useEffect(() => {
        getAPIData('cat')
    }, [getAPIData]);

    return (
        <div className='api_flilter'>
            <form onSubmit={onsubmit}>
                <input type="text" value={search} onChange={handleChange} className='filter_input' />
                <button >submit</button>
            </form>
            <div className="image_container">
                {api?.results?.map((curr, idx) => <div key={idx} className='div_container'>
                    <img src={curr.urls?.thumb} alt='' className='img' width={200} height={250} />
                    <p className='title_tag'>{curr.user?.first_name}</p>
                </div>)}
            </div>
        </div>
    )
}

export default apifilter