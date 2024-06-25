import  { useState } from 'react'
import './todoinput.css';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialState = {
  name: "",
  lastName: '',
  email: '',
};

const FormHandling = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [holiday, setHoliday] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (!data?.name) {
      setError((pre) => ({ ...pre, name: "Name field is required" }))
      flag = false
    }
    if (!data?.lastName) {
      setError((pre) => ({ ...pre, lastName: "Last name is required" }))
      flag = false
    }
    if (!data?.email) {
      setError((pre) => ({ ...pre, email: "Email is required" }))
      flag = false
    }
    if (flag) {
      setHoliday(pre => [...pre, data])
      setData(initialState);
      setError(initialState)
    }
  }
  console.log(data);

  return (
    <div className='formdiv' >
      <h1>Holiday request form  <FontAwesomeIcon icon={faExclamation} /></h1>
      <form onSubmit={handleSubmit}>
        <label >name</label>
        <input type="text" name='name' className={error.name ? "error" : ''} value={data.name} onChange={(e) => handleChange(e)} />
        {error.name && <p>{error.name}</p>}
        <br /><br />
        <label >last Name</label>
        <input type="text" value={data.lastName} className={error.lastName ? "error" : ''} name='lastName' onChange={(e) => handleChange(e)} />
        {error.lastName && <p>{error.lastName}</p>}
        <br /><br />
        <label >email</label>
        <input type="email" value={data.email} className={error.email ? "error" : ''} name='email' onChange={(e) => handleChange(e)} />
        {error.email && <p>{error.email}</p>}
        <br /><br />
        <button className='smtbtn' >submit</button>
      </form>
      <div className="">
        <ul>
          {holiday?.map((curr, idx) => <li key={idx}>
            <p>Name:{curr.name}</p>
            <p>lastName:{curr.lastName}</p>
            <p>Email:{curr.email}</p>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default FormHandling