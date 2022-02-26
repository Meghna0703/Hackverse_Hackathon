import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';


import HomePage from './components/HomePage'
import HospitalRegistration from './components/HospitalRegistration';
import UserRegistration from './components/UserRegistration';
import DoctorRegistration from './components/DoctorRegistration';
function App() {
  return (
    <BrowserRouter>
     
       <Routes>
      
       <Route path="/" exact element={<HomePage />} />
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       <Route path="/DoctorRegistration" element={<DoctorRegistration />} /> 
       
       
       
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
