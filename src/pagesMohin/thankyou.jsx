import React from 'react';
import { useNavigate } from 'react-router-dom';


function ThankYouPage() {
  const logo = 'https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082755/logo_qf2djj.png';
  const navigate = useNavigate();

  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720081150/img6_g67zpd.jpg')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen backdrop-blur-sm flex flex-col items-center justify-center px-4">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-32 mb-8 transition-transform duration-300 hover:scale-110" 
        />
        
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-xl shadow-lg transition-all duration-300 hover:shadow-white/30 text-center">
          <h1 className="text-4xl font-light text-white mb-6">
            Thank You for Your Enquiry
          </h1>
          
          <p className="text-xl mb-8 text-cyan-500">
            We appreciate your interest in our Family Suite. Our team will review your request and contact you soon.
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