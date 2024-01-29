import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const [values,setvalues] = useState({
        name:'',
        email:''
    })
    const navigate = useNavigate();
   const handelClick = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/users',values)
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
    navigate('/')

   }
  return (
    <>
      <div>Create</div>

      <form onSubmit={handelClick}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required 
            onChange={e=>setvalues({...values,name:e.target.value})}
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required 
            onChange={e=>setvalues({...values,email:e.target.value})}
        />

        <button type="submit" >Submit</button>
        <button type="button" className="back" >
          Back
        </button>
      </form>
    </>
  );
}


