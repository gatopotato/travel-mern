import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate} from 'react-router-dom'



function PrivateRouting() {
    const {currentUser} = useSelector((state)=>state.user);
    console.log('private routing');
  return (

    <div>
        {currentUser ? <Outlet /> : <Navigate to='/signin' />}
      
    </div>
  )
}

export default PrivateRouting
