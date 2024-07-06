import * as React from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ imageSrc, title, buttonText,linkTo }) =>
   {

    const navigate = useNavigate();

    const handleChange = () => {
      navigate(linkTo)
    }



    return(
  <div className="relative overflow-hidden aspect-[16/10] md:aspect-[3/2] group">
    <div onClick={handleChange}>
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end p-2 sm:p-3 md:p-4 transition-all duration-300 group-hover:bg-opacity-60">
      <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {title}
      </h3>
      <button className="bg-teal-400 text-white text-xs sm:text-sm md:text-base font-medium py-1 px-2 md:py-2 md:px-3 rounded-md self-start flex items-center transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-teal-500">
        <span>{buttonText}</span>
        <svg
          className="ml-1 w-3 h-3 md:w-4 md:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    </div>
    
  </div>
)};

function Manali() {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };
  const rooms = [
    {
      imageSrc: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082715/aangan-villa_dchckp.png",
      title: "Aangan Villa",
      buttonText: "Know More",
      linkTo: "/infovilla"
    },
    {
      imageSrc: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082714/aangan-homes_mv7rac.png",
      title: "Aangan Homestays",
      buttonText: "Know More",
      linkTo: "/infohomes"
    },
  ];

  return (
    <div className="bg-slate-800 bg-opacity-100 min-h-screen min-w-screen">
      <main className="container px-4 sm:px-6 md:px-8 py-3.5 md:py-5 ">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082731/bg-manali_lnt6lw.png"
          alt=""
          className="object-cover absolute inset-0 fit-cover w-full h-full"
        />
        <div className="relative ">
        <div className="relative z-10">
          <div onClick={handleLogo} className="block w-16 sm:w-20 md:w-24 aspect-square mb-4 sm:mb-6 md:mb-8 hover:scale-110 transition-transform duration-300">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082719/aangan_logo_mxdrjf.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row mb-6 sm:mb-8 md:mb-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Aangan Villa & Homes<br />
                by Mid Orchard,<br />
                Manali
              </h1>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <p className="text-stone-300 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[1.5px] md:tracking-[2.1px] mt-0">
                Welcome to our distinguished property 
                nestled amidst picturesque mountains, where luxury meets unparalleled hospitality.
                We are dedicated to curating an unforgettable experience for every guest,
                ensuring your stay is filled with comfort, elegance, and lasting memories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {rooms.map((room, index) => (
              <div key={index} className="col-span-1">
                <RoomCard {...room} />
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default Manali;