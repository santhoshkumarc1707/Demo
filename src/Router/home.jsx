import React, { useState } from 'react'
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialState = {
  name: "",
  email: '',
};

const FormHandling = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(initialState);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (!data?.name) {
      setError((pre) => ({ ...pre, name: "Name  is invalid" }))
      flag = false
    }
    if (!data?.email) {
      setError((pre) => ({ ...pre, email: "Email is invalid" }))
      flag = false
    }
    if (flag) {
      setData(initialState);
      setError(initialState)
    }
  }
  console.log(data);

  return (
    <div className='formdiv' >
      <form onSubmit={handleSubmit}>
        <label >name</label>
        <input type="text" name='name' className={error.name ? "error" : ''} value={data.name} onChange={(e) => handleChange(e)} />
        {error.name && <p>{error.name}</p>}
        <br /><br />
        <label >email</label>
        <input type="email" value={data.email} className={error.email ? "error" : ''} name='email' onChange={(e) => handleChange(e)} />
        {error.email && <p>{error.email}</p>}
        <br /><br />
        <button className='smtbtn' >submit</button>
      </form>
    </div>
  )
}

export default FormHandling