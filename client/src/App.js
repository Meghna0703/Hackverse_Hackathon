import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';


import HomePage from './components/HomePage'
import HospitalRegistration from './components/HospitalRegistration';
import UserSearch from './components/UserSearch';
import UserRegistration from './components/UserRegistration';
import Appointment from './components/Appointment';
import DoctorBoard from './components/DoctorBoard';
import LoginUi from './components/LoginUi'
import Resources from './components/Resources';
import  Doctor  from './components/Doctor';
import Symptom from './components/Symptom';
import DoctorRegistration from './components/DoctorRegistration';
import PCOSPrediction from './components/PCOSPrediction';
import Diabetes from './components/Diabetes';
import DepressionForm from './components/DepressionForm';
import ChronicDiagnosis from './components/ChronicDiagnosis'
function App() {
  return (
    <BrowserRouter>
     
       <Routes>
      
       <Route path="/" exact element={<HomePage />} />
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/usersearch" element={<UserSearch />} />
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       <Route path="/appointment/:id" element={<Appointment />} /> 
       <Route path="/dashboard" element={<DoctorBoard/>}/>
       <Route path='login' element={<LoginUi/>}/>
       <Route path='/resources' element={<Resources/>}/>
       <Route path='/doctors' element={<Doctor/>}/>
       <Route path="/symptoms" element={<Symptom/>} />
       <Route path="/doctorRegistration" element={<DoctorRegistration/>} />
       <Route path="/pcos" element={<PCOSPrediction/>} />
       <Route path="/diabetes" element={<Diabetes/>}/>
       <Route path="/depression" element={<DepressionForm/>} />
       <Route path="/chronic" element={<ChronicDiagnosis/>} />
       
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
