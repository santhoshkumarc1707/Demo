
import { useEffect, useState } from 'react'
import './contect.css'

const Contect = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((Response) => Response.json())
      .then((data) => { setApi(data) })
      .catch((err) => { console.log(err.message) })
  }, []);

  return (
    <div>
      <div className='div_cointainer'>
        {api?.map((curr, inx) => <div key={inx} className='api_call'><img src={curr.image}
          alt={curr.title} width={100} className='img_cantainer' />
          <p>{curr.title}</p>
        </div>)}
      </div>
    </div>

  )
}

export default Contect