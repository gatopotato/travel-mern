import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Profile from '../components/Profile'

function Dashboard() {
  const location = useLocation();
  const [tab,setTab] = useState('');


  useEffect(()=>{
    const urlParam = new URLSearchParams(location.search);
    const tabFromUrl = urlParam.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search])

  
  
  return (
    <div  className='min-h-screen flex flex-col md:flex-row'>
        <div className='md:w-56'>
          <SideBar></SideBar>
        </div>
        <div>
          <Profile></Profile>
        </div>
      
    </div>
  )
}

export default Dashboard
