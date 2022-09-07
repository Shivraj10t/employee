import React from "react";
import EmployeeDetails from "../employee/EmployeeDetails";
import EmployeeList from "../employee/EmployeeList";
import Login from "../login/Login";
import {Link, Route,BrowserRouter as Router,Routes} from 'react-router-dom';
 

function Home() {
  return (
    <>
      <Router>
        {/* <ul>
          <li> <Link  to="/">EmployeeList</Link></li>
          <li>    <Link  to="/details">EmployeeDetails</Link></li>
        </ul> */}
       
    
        
        <Routes>

        <Route path="/" element={<EmployeeList/>}></Route>
        <Route path="/details" element={<EmployeeDetails/>}></Route>
        </Routes>
      
       
      </Router>
   
    </>
  )
}

export default Home
{/* <Login id={1}></Login>
 <Login  ></Login> 
<EmployeeDetails></EmployeeDetails>
<EmployeeList/> */}