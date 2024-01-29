import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const[data,setdata]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=> setdata(res.data))
        .catch(err=>console.log(err))
        
    })

    const handelDelete=(id)=>{
        const confirm = window.confirm("Would you like to delete?");
        if(confirm){
            axios.delete('http://localhost:5000/users/'+id)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    }
    
  return (
    <>
        <div>Home</div>
        <div className='create'>
            <Link to='/create'> ADD +</Link>
        </div>
    <tabel>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>E-MAIL</th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((d,i) => (
                <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                
                    <button className='edit'><Link to={`/read/${d.id}`}>Read</Link></button>
                    <button className='delete' onClick={e=>handelDelete(d.id)}>Delete</button>
                    <button className='update'><Link to={`/update/${d.id}`}> Update</Link></button>
                </td>

                </tr>
            ))
        }
        </tbody>
    </tabel>

    </>
  )
}
