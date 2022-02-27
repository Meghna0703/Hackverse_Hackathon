import axios from "axios";
import React, { useEffect,useState } from "react";
import './DoctorBoard.css'
import Navbar from "./Navbar";
import {setGlobalState,useGlobalState} from './state';
const DoctorBoard=()=>{
    const[resultData,setResultData]=useState([])
    
    
const jwtToken=useGlobalState('jwtToken')[0]
console.log(jwtToken)
const authAxios=axios.create({
    headers:{
      Authorization:`Bearer ${jwtToken}`,
    },
  })
const [LoggedInUser,setUser]=useState('')
const user=useGlobalState('token')[0]['email']
useEffect(()=>{
    setUser(user)
    authAxios.get("http://localhost:5000/api/v1/doctors/appointments/")
    .then(res=>{
        setResultData(res.data.appointments)
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
},[])
   return(
       <>
       <Navbar></Navbar>
       <div>
           <h1 class='heading pt-2'>Your Appointments</h1>
           <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
           <div className='searchResult'>
                    {
                        resultData.map((key,val)=>(
                            <div className=' searchCard d-flex flex-row' 
                            style={{borderBottom:'solid',
                            borderBottomWidth:'1px',
                            borderBottomColor:'#7D7B7B',
                            paddingTop:'20px',
                            width:'70%'
                            
                                 }}
                        >
                                <div className='iconResult d-flex justify-content-center align-items-center flex-column'>
                                <span style={{color:'white'}} class="iconify" data-icon="uil:user"></span>
                                </div>
                                <div className='d-flex flex-column sectionDivide'>
                                    <h2 className='searchName'>{key.user.name}</h2>
                                    <p className='textSearch'>{key.address}</p>
                                    <p className='textSearch ' >email id:{key.user.email}</p>
                                    
                                </div>
                                <div class='sectionDivide '>
                                    <p className='textSearch ' style={{textAlign:'right'}}>date:{key.date.date}</p>
                                </div>
                                <div class='sectionDivide '>
                                    <p className='textSearch ' style={{textAlign:'right'}}>time:{key.date.time}</p>
                                </div>
                                
                            
                            </div>
                        ))
                    }
                    
                   
                    
                    
                    
                </div>
       </div>
       </>
   )
}

export default DoctorBoard