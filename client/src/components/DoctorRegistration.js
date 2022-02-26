import React,{useState} from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './resource.css'
import axios from 'axios';
const DoctorRegistration = () =>{
   
  const[formData,setFormData]=useState()
  const[error,setError]=useState([])
  const navigate=useNavigate()
  const ChangeHandler=(event)=>{
    var{name,value}=event.target
   
    setFormData({
      ...formData,
      [name]:value
    })
 }

 const clickHandler=async()=>{
  console.log(formData)
  const{name,email,phone,address,speciality,experience,fees,password,confPassword}=formData
  axios.post("http://localhost:5000/api/v1/doctors/request",{
    name,email,fees,phone,experience,speciality,address,password,confPassword
  }).then(res=>{
    console.log(res)
    navigate('/')
   
  }).catch(err=>{
    console.log(err)
    setError(err.response.data.errors)
  })
}


    
    return (
        <>
        <Navbar/>
        <div  className="container2 mt-5">
           <h1 class='heading pt-2'>Doctor Registration</h1>
           <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
        </div>
       
        
        <section className="signup">
              <div className="container mt-5">
                  <div className="signup-content">
            
                    <div className="signup-form">
                    {
              error.length==0?null:(
                error.map((key,value)=>(
                  <p style={{color:'red',fontSize:'12px',display:'block',marginLeft:'auto',marginRight:"auto",width:'60%',marginBottom:'-1px'}}><i class="zmdi zmdi-close-circle material-icons-name mr-2"></i>{key.msg}</p>
                ))
              )
            }
                        
                       <form className="register-form" id="register-form">
                           <div className="form-group">
                               <label htmlFor="name">
                               <i class="zmdi zmdi-account material-icons-name"></i>

                               </label>
                               <input onChange={ChangeHandler}  type="text" name="name" id="name" autoComplete="off"
                                 placeholder="Name"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="email">
                               <i class="zmdi zmdi-email material-icons-name"></i>

                               </label>
                               <input onChange={ChangeHandler} type="text" name="email" id="email" autoComplete="off"
                                 placeholder="Email"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="contact no.">
                               <i class="zmdi zmdi-phone material-icons-name"></i>

                               </label>
                               <input onChange={ChangeHandler} type="text" name="phone" id="contact no." autoComplete="off"
                                 placeholder="Contact Number"
                                 />
                           </div>
                           <div className='form-group'>
                             

                             <label htmlFor="address">
                                 <i class="zmdi zmdi-pin drop-icons-name"></i>
                                 </label>
                                 <input onChange={ChangeHandler} type="text" name="address" id="address" autoComplete="off"
                                   placeholder="Address"
                                   />
                             </div>
                           <div className="form-group">
                               <label htmlFor="speciality">
                               <i class="zmdi zmdi-pin drop material-icons-name"></i>
                               </label>
                               <input onChange={ChangeHandler} type="text" name="speciality" id="speciality" autoComplete="off"
                                 placeholder="Speciality"
                                 />

                            

                           </div>
                           <div className='form-group'>
                             

                           <label htmlFor="experience">
                               <i class="zmdi zmdi-pin drop-icons-name"></i>
                               </label>
                               <input onChange={ChangeHandler} type="text" name="experience" id="experience" autoComplete="off"
                                 placeholder="Experience"
                                 />
                           </div>
                           <div className='form-group'>
                             

                           <label htmlFor="fees">
                               <i class="zmdi zmdi-pin drop-icons-name"></i>
                               </label>
                               <input onChange={ChangeHandler} type="text" name="fees" id="fees" autoComplete="off"
                                 placeholder="Fees"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="password">
                               <i class="zmdi zmdi-circle material-icons-name"></i>

                               </label>
                               <input onChange={ChangeHandler} type="text" name="password" id="password" autoComplete="off"
                                 placeholder="Your Password"
                                 />
                           </div>
                           <div className="form-group">
                               <label htmlFor="Confirm Password">
                               <i class="zmdi zmdi-circle material-icons-name"></i>

                               </label>
                               <input onChange={ChangeHandler} type="text" name="confPassword" id="Confirm Password" autoComplete="off"
                                 placeholder="Confirm Password"
                                 />
                           </div>

                           <div className="form-group form-button">
                               
                            
                           <input
                type="button"
                name="signup"
                id="signup"
                className="form-submit "
                value="SUBMIT"
                onClick={clickHandler}
              />
                           </div>


                       </form>
                        </div>
                      </div>
              </div>
              </section>
        </>
    )
}

export default DoctorRegistration;