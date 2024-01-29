import React, { useEffect,useState} from 'react';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Update() {
  const [values,setvalues] = useState({
    name:'',
    email:''
})
const navigate = useNavigate();
  // const [data,setdata] = useState([])
    const {id} = useParams()
   
   useEffect(()=>{
    axios.get('http://localhost:5000/users/',+ id)
    .then(res=> setvalues(res.data))
    .catch(err=>console.log(err))
   },[])
   
   const handelClick = (event) => {
    event.preventDefault();
    axios.put('http://localhost:5000/users/'+id,values)
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
    navigate('/')

   }
  

   
  return (
    <>
      <div>Update</div>

      <form onSubmit={handelClick}>
        <label >Name:</label>
        <input type="text" id="name" required 
            value={values.name} onChange={e=>setvalues({...values,name:e.target.value})}
        />

        <label >Email:</label>
        <input type="email" id="email" required 
           value={values.email}
           onChange={e=>setvalues({...values,email:e.target.value})}
        />

        <button type="submit" >Submit</button>
       <Link to="/">Back</Link>
      </form>
    </>
  );
}


