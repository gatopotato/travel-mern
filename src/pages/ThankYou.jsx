// import React from 'react'
// import {useNavigate} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux'

// function ThankYou() {
//     const navigate = useNavigate();
//     const userDetails = useSelector((state) => state.form);
//     const handleClick = () => {
//         navigate('/')
//     }
//   return (
//     <div>
//         <h1>Thank you , the details have been sent to the adin and a confirmtion mail has been sent on your mail , we Will get back to you soon</h1>
//         <h1>{userDetails.userName}</h1>
//         <h1>{userDetails.email}</h1>
//         <h1>{userDetails.phoneNumber}</h1>
//         <h1>{userDetails.checkInDate}</h1>
//         <h1>{userDetails.checkOutDate}</h1>

//         <button onClick={handleClick}>HomePage</button>
      
//     </div>
//   )
// }

// export default ThankYou



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ThankYouPage() {
  const logo = 'https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082755/logo_qf2djj.png';
  const navigate = useNavigate();
  const location = useLocation();
  const propsToSend = location.state || {};
  
  
  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${propsToSend.background})`}}>
      <div className="bg-black bg-opacity-50 min-h-screen backdrop-blur-sm flex flex-col items-center justify-center px-4">
        <img 
          src={propsToSend.logo} 
          alt="Logo" 
          className="w-32 mb-8 transition-transform duration-300 hover:scale-110" 
        />
        
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-xl shadow-lg transition-all duration-300 hover:shadow-white/30 text-center">
          <h1 className="text-4xl font-light text-white mb-6">
            Thank You for Your Enquiry
          </h1>
          
          <p className="text-xl mb-8 text-cyan-500">
            We appreciate your interest in our {propsToSend.roomName || 'room'}. Our team will review your request and contact you soon.
          </p>
          
          <button 
            onClick={() => navigate('/')} 
            className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Return to Home
          </button>
        </div>
      </div>
    </main>
  );
}

export default ThankYouPage;