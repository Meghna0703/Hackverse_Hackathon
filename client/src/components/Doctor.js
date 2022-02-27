import axios from "axios";
import React,{useEffect,useState} from "react";
import './Doctors.css'
import Navbar from "./Navbar";
import { Link, useSearchParams } from "react-router-dom";
const Doctor =(data)=>{
    
    const [disease,setDisease]=useState('all')
    const[doctorList,setDoctorList]=useState([])
    useEffect(()=>{
        console.log(data.data)
        axios.get("http://localhost:5000/api/v1/doctors/get",{
            params:{
                disease:data.data
            }
        })
        .then(res=>{
            console.log(res)
            setDoctorList(res.data.doctors)
        })
        .catch(err=>{
            console.log(err)
        })
    
      },[])
    return(
        <> 
         
         <div >
             <h1  class='heading pt-4'>Consult Doctor</h1>
             <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
             <div class='doctorList'>
                 {
                     doctorList.map((key,value)=>(
                        <div class='card mt-4 mb-4 align-items-start'style={{'lineHeight':'10px'}} >
                           <div class='d-flex flex-row'><p className="mr-2 doctorLabel">Name:</p><p className="doctorInfo"> Dr. {key.name}</p></div>
                           <div class='d-flex flex-row'><p className="mr-2 doctorLabel">Specialist:</p><p className="doctorInfo"> {key.speciality}</p></div>
                           <div class='d-flex flex-row'><p className="mr-2 doctorLabel">Experience:</p><p className="doctorInfo"> {key.experience}</p></div>
                           <div class='d-flex flex-row'><p className="mr-2 doctorLabel">Fees:</p><p className="doctorInfo"> Rs.{key.fees} for 1 hour</p></div>
                           <div class='d-flex flex-row'><p className="mr-2 doctorLabel">Address:</p><p className="doctorInfo"> {key.address}</p></div>
                           <button class='form-submit' style={{'border':'none','font-size':'12px'}}>
                               <Link style={{'color':'white'}} to={`/appointment/${key._id}`}>Book Slot</Link>
                           </button>
                        </div>
                     ))
                 }
                
             </div>
         </div>
        </>
    )
}

export default Doctor;