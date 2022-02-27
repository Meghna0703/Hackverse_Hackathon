import React,{useState} from "react"
import Navbar from "./Navbar"
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './Appointment.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import {setGlobalState,useGlobalState} from './state';
const Appointment=()=>{
    const jwtToken=useGlobalState('jwtToken')[0]
    const [date, onChange] = useState(new Date());
    const [time,onChangeTime]= useState('10:00')
    const {id}=useParams()
    const authAxios=axios.create({
        headers:{
          Authorization:`Bearer ${jwtToken}`,
        },
      })
    function submitForm(){
        console.log(date,time,id)
        authAxios.post('http://localhost:5000/api/v1/doctors/add',{
            date,time,id
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }



   return(
    <>
   <Navbar/>
    <h1 class='heading pt-2'>Heading</h1>
    <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
    <div className='appform'>
        
        <div class='dateTime'>
        <div class='d-flex flex-row mb-5 '>
            <div class='mr-5'>Choose Date</div>
            <DatePicker onChange={onChange} value={date} />
        </div>
        <div class='d-flex flex-row '>
            <div class='mr-5'>Choose Time</div>
            <TimePicker onChange={onChangeTime} value={time} />
        </div>
        <button onClick={submitForm} className="form-submit" style={{'border':'none','marginTop':'50px'}}>Book Appointment</button>
        </div>

        

    
    </div>
    </>
   )
}
export default Appointment