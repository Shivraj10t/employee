import React,{useState,useEffect} from 'react'
import axios from 'axios'



 
 
 function Login(props) {

    const [datas,setLogin]=useState({username:'',password:''})
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(props.id,'handleLogin')
        console.log((props.id=='0'||props.id==undefined))
        console.log((props.id=='0'&&props.id==undefined))
     
    }
 const handleUpdate=(e)=>{
  e.preventDefault();
  console.log(props.id,'handleUpdate')
  console.log((props.id=='0'||props.id==undefined))
  console.log((props.id=='0'&&props.id==undefined))
 }
   return (
     <div className="login">
    <h1>Login</h1>
    <form className="login" onSubmit={(props.id=='0'||props.id==undefined) ?handleLogin:handleUpdate}>
<label>User Name <input type='text' onChange={(user)=>{datas.username=user.target.value}} placeholder='Enter User Name'></input></label>
<label>Password <input type='password' onChange={(user)=>{datas.password=user.target.value}} placeholder='Enter Password' ></input></label>
<button>Login</button>
    </form>
     </div>
   )
 }
 
 export default Login
 
