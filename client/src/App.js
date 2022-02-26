import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';


import HomePage from './components/HomePage'
import HospitalRegistration from './components/HospitalRegistration';
import UserRegistration from './components/UserRegistration';
import DoctorRegistration from './components/DoctorRegistration';
import UserSearch from './components/UserSearch';
import Resources from './components/Resources';
import LoginUi from './components/LoginUi';
import Diabetes from './components/Diabetes';
function App() {
  return (
    <BrowserRouter>
     
       <Routes>
      
       <Route path="/" exact element={<HomePage />} />
       <Route path="/HospitalRegistration" element={<HospitalRegistration />} /> 
       <Route path="/UserRegistration" element={<UserRegistration />} /> 
       <Route path="/DoctorRegistration" element={<DoctorRegistration />} />
       <Route path="/usersearch" element={<UserSearch />} /> 
       <Route path='/resources' element={<Resources/>}/>
       <Route path='login' element={<LoginUi/>}/>
       <Route path="/diabetes" element={<Diabetes/>}/>
       
       
       
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
