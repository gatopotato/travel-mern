import * as React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";



function RoomCard({ imageSrc, title, buttonText,linkTo }){
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(linkTo)
  }


  return (
    <div className="relative overflow-hidden aspect-square group">
    <div onClick={handleChange}>
    <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300 group-hover:bg-opacity-60">
      <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{title}</h3>
      <button className="bg-teal-400 text-white text-xs sm:text-sm font-medium py-1 sm:py-2 px-2 sm:px-4 rounded-md self-start flex items-center transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-teal-500">
        <span>{buttonText}</span>
        <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </div>
    
  </div>
  )
}

  
  
  


function LandingKasol() {
  const navigate = useNavigate();
  const rooms = [
    {
      imageSrc: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082851/super-deluxe_w7zsyc.png",
      title: "Super Deluxe Room With Balcony & Mountain View",
      buttonText: "Know More",
      linkTo: "/infosd"
    },
    {
      imageSrc: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082760/luxury_doufbg.png",
      title: "Luxury Room With Balcony & River View",
      buttonText: "Know More",
      linkTo: "infolux"
    },
    {
      imageSrc: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082744/family_tdyttt.png",
      title: "Family Suite",
      buttonText: "Know More",
      linkTo: "/infofam"
    }
  ];

  const handleLogo = () => {
    navigate('/');
  }


  return (
    <div className="bg-slate-800 bg-opacity-100 min-h-screen min-w-full">
      <main className="container mx-auto px-4 sm:px-7 py-3.5 relative min-h-screen min-w-full">
        <img loading="lazy" src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082721/bg-kasol_dcdhrj.png" alt="" className="object-cover absolute inset-0 w-full h-full" />
        <div className="relative z-10">
          <div onClick={handleLogo} className="block w-16 sm:w-24 aspect-square mb-4 sm:mb-8 hover:scale-110 transition-transform duration-300">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082755/logo_qf2djj.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row mb-8 sm:mb-12">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <h1 className="text-yellow-300 text-4xl sm:text-6xl font-bold">
                MID ORCHARD<br />
                KASOL<br />
                RIVERSIDE
              </h1>
            </div>
            <div className="w-full sm:w-1/2 flex items-center">
              <p className="text-stone-300 text-xl sm:text-3xl tracking-[1.5px] sm:tracking-[2.1px]">
                Here At Mid Orchard, Kasol - We Take Pride In Providing Our Guests With The Highest Quality And Very Personal Service So We Can Emulate What It's Like To Be At Home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingKasol;