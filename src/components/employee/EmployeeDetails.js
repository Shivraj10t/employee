import axios from 'axios';
import React,{useState,useEffect} from 'react'

function EmployeeDetails(props) {

const [designation,setDesignation]=useState([])

    const [datas,setLogin]=useState({FirstName:'',LastName:'',DesignationId:'',DateOfJoining:'',salary:''})
    const handleAdd=(e)=>{
        e.preventDefault();

      axios.post('http://localhost:4626/Api/employee/',datas).then(res=>{
console.log(res.data)
      }
      )
    }
 const handleUpdate=(e)=>{
  e.preventDefault();
 
 }
useEffect(()=>{
    axios.get("http://localhost:4626/Api/Designation/")
    .then(res=>{
        res=JSON.parse(res.data)
        setDesignation(res)
    }).catch(err=>console.log(err))
},[designation])


  return (
    <>
      <form className='login' onSubmit={(props.id=='0'||props.id==undefined) ?handleAdd:handleUpdate}>
 

      <label> FirstName:   <input type='text' placeholder='Enter FirstName' onChange={e=>{datas.FirstName=e.target.value}}></input>   </label>
      <label> LastName:   <input type='text' placeholder='Enter LastName' onChange={e=>{datas.LastName=e.target.value}}></input>   </label>
      <label> Designation:  <select onChange={e=>{datas.DesignationId=e.target.value}}> 
      {designation.map(Desi=>(
 <option key={Desi.DesignationId} value={Desi.DesignationId}>{Desi.Designation}</option>
      ))}
       </select>  </label>
      <label> Date Of Joining:   <input type='date'   onChange={e=>{datas.DateOfJoining=e.target.value}}></input>   </label>
      <label> salary:   <input type='number' placeholder='Enter salary' onChange={e=>{datas.salary=e.target.value}}></input>   </label>
      <button>Add Employee</button>
      </form>
    </>
  )
}

export default EmployeeDetails
