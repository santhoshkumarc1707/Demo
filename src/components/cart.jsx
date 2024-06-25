import axios from 'axios';
import { useCallback, useEffect } from 'react'


const Cart = () => {
    let url = 'http://localhost:5000/posts';

    const getAPIData = useCallback(async () => {
        try {
            const response = await axios.get(url);
            console.log(response?.data);
        } catch (error) {
            console.log(error.message, "error");
        }
    }, [url]);

    const handlePOST = async () => {
        try {
            const data = { "id": 2, "title": "Hi " }
            await axios.post(url, data);
        } catch (error) {
            console.log(error.message, "error");
        }
    }

    useEffect(() => {
        getAPIData()
    }, [getAPIData]);

    return (
        <div >
           
            <button onClick={handlePOST}> POST</button>
        </div>
    )
}

export default Cart
