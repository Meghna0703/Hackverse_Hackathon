import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import {setGlobalState,useGlobalState} from './state';
const Navbar = () =>{
   
    const isloggedIn=useGlobalState("LoggedIn")[0]
    const userRole=useGlobalState("token")[0]['role']
   
    return (
        <>
       <nav style={{backgroundColor:'white',fontSize:'13px'}} class="navbar navbar-expand-md  ">
  
        
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link style={{color:'black'}} class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/usersearch">medical Resources </Link>
      </li>
      <li class="nav-item">
      <Link style={{color:'black'}} class="nav-link" to="/symptoms">Symptom Report</Link>
      </li>
      <li class="nav-item">
      <Link style={{color:'black'}} class="nav-link" to="/chronic">Chronic Disease Detection</Link>
      </li>
      <li class="nav-item">
      <Link style={{color:'black'}} class="nav-link" to="/doctors">Consult Doctors</Link>
      </li>
      {
        userRole!=='USER' && isloggedIn &&userRole!=='DR' ?<li class="nav-item">
        <Link style={{color:'black'}} class="nav-link" to="/resources">Resource Inventory</Link>
      </li>:null
      }

{
        isloggedIn?<Link style={{color:'black'}} class="nav-link" to="/">Logout</Link>:<div >
          <li class="nav-item" class='afterLogin d-flex justify-content-center align-items-center flex-row'>
        <Link style={{color:'black'}} class="nav-link" to="/Login">Login</Link>
        <div class="dropdown">
  <button style={{fontSize:'13px'}} class="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Register
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link style={{'font-size':'13px'}} class="nav-link" to="/UserRegistration">user Registration</Link>
  <Link style={{'font-size':'13px'}} class="nav-link" to="/Hospitalregistration">Hospital Registration</Link>
  <Link style={{'font-size':'13px'}} class="nav-link" to="/doctorRegistration">Doctor Registration</Link>
  </div>
</div>
      </li>
        </div>
      }
      {
          isloggedIn &&userRole==='DR'? <li><Link style={{'font-size':'13px','color':'black'}} class="nav-link" to="/dashboard">Apppointments</Link></li>:null
      }
    </ul>
  </div>

</nav>
        </>
    )
}

export default Navbar;
