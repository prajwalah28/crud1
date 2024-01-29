import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Read() {
  const [data,setdata] = useState([])
const {id} = useParams()
useEffect(()=> {
  axios.get('http://localhost:5000/users/'+id)
.then(res=> setdata(res.data))
.catch(err=>console.log(err))
console.log(data);
},[])
  return (
   <>
     <div>Read</div>
    <div className='name'>Name: {data.name}</div>
    <div className='name'>Email: {data.email}</div>
   </>
  )
}
