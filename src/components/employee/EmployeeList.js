import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
 

 class EmployeeList extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         empData:[]
      }
    }
    search=(id)=>{    
      axios.get(`http://localhost:4626/Api/employee/${id}`)              
      .then(d=>{       
          d=JSON.parse(d.data)
          this.setState({
              empData:d
          })  })
      // if error
      .catch(function(error) {
        console.log(error);
      });
        
    }
    componentDidMount(){     
     this.search('')}
    handleSearch=(e)=>{
this.search(e.target.value)
    }

    handleEdit=(e)=>{
console.log(e.target.value)
    }
    handleDelete=(e)=>{
 
      axios.delete(`http://localhost:4626/Api/DeleteEmp/${e.target.value}`)
      .then(()=>{
        this.search('')
      })
 
    }
    hc(){
      this.props.history.push('/details')
    }
  render() {
      const{empData}=this.state;
  
 
    return (
      
    <div className="App">
    <a>

      <Link to='/details'>       Add New</Link>

    </a>
        <form>
          <label>Employee Name <input type='text' onChange={this.handleSearch} placeholder='Search Employee'></input></label> 
        </form>
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Date Of Joining</th>
            <th>salary</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            empData.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.EmployeeId}</td>
                  <td>{value.FirstName} &nbsp;{value.LastName}</td>
                  <td>{value.Designation}</td>
                  <td>{value.DateOfJoining}</td>
                  <td>{value.salary}</td>
                  <td><button className='edit' value={value.EmployeeId} onClick={
                 this.handleEdit
                  }>Edit</button></td>
                  <td><button className='delete' value={value.EmployeeId} onClick={(e)=>{this.handleDelete(e)}}>Detete</button></td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
     
    )
  }
}
 
export default EmployeeList
