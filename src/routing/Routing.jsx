import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import PrivateRouting from '../components/PrivateRouting'

import Kasol from '../pages/landing-kasol.jsx'
import Manali from '../pages/landing-manali.jsx'
import SD from '../pages/info-sd.jsx'
import Lux from '../pages/info-lux.jsx'
import Fam from '../pages/info-fam.jsx'
import Villa from '../pages/info-villa.jsx'
import Homes from '../pages/info-homes.jsx'
import Sdenq from '../pages/sd-enq.jsx'
import Luxenq from '../pages/lux-enq.jsx'
import Famenq from '../pages/fam-enq.jsx'
import Villaenq from '../pages/villa-enq.jsx'
import Homesenq from '../pages/homes-enq.jsx'

import ThankYou from '../pages/ThankYou.jsx'

import Legal from '../pagesMohin/legal.jsx'


import EmailVerify from '../components/EmailVerify/index'





import Landing from '../pagesMohin/landing'
import Host from '../components/host'
import Testing from '../components/Testing.jsx'



function Routing() {
  return (
    <Routes>
      

      {/* <Route element={<PrivateRouting/>}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}

      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />














      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signup" element={<SignUp />} />  
      <Route path="/about" element={<AboutUs />} />    
      <Route path="/user/:id/verify/:token" element={<EmailVerify/>}></Route>
 
             

      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/test/landing" element={<Landing />} /> 
      <Route path="/host" element={<Host />} /> 
  
      <Route path="/kasol" element={<Kasol />} />    
      <Route path="/manali" element={<Manali />} />   
      <Route path="/infosd" element={<SD />} />  
      <Route path="/kasol/infolux" element={<Lux />} /> 
      <Route path="/infofam" element={<Fam />} />     
      <Route path="/infovilla" element={<Villa />} />  
      <Route path="/infohomes" element={<Homes />} /> 
      <Route path="/sdenq" element={<Sdenq />} /> 
      <Route path="/luxenq" element={<Luxenq />} />
      <Route path="/famenq" element={<Famenq />} /> 
      <Route path="/villaenq" element={<Villaenq />} /> 
      <Route path="/homesenq" element={<Homesenq />} />  
      <Route path="/test" element={<Testing />} /> 

      <Route path="/legal" element={<Legal />} />  
   
     

    </Routes>
  )
}

export default Routing
