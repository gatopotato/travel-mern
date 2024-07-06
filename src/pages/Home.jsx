import React, { useState, useRef,useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../components/footer";
import Properties from "../components/firstPage/properties";
import Testimonial from "../components/firstPage/testimonials";
import Host from "../components/host";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/formSlice";
import axios from "axios";
import { signoutSuccess } from "../redux/userSlice";
import { resetForm } from "../redux/formSlice";


function Home() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  
  const propertiesRef = useRef(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  

 

  const handleClick = () => {
    navigate("/signin");
  };

  const handleClickLogOut = async () => {
    try{
      const res = await axios.post('http://localhost:3000/auth/signout');
        dispatch(signoutSuccess());
        dispatch(resetForm());
    }
    catch(error){

    }
  };

  const incrementCount = () => {
    if (numberOfPeople < 8) {
      setNumberOfPeople(numberOfPeople + 1);
    }
  };

  const decrementCount = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(numberOfPeople - 1);
    }
  };



  const NavItem = ({ text, targetId }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div onClick={handleClick} className="text-white hover:text-teal-300 cursor-pointer transition-colors duration-300">
        {text}
      </div>
    );
  };
  
  const DateSection = ({ icon, title, date, subtitle, onDateChange, minDate }) => (
    <div className="flex flex-col w-full sm:w-auto group">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
        <div className="text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-cyan-600">{title}</div>
      </div>
      <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold relative">
        <DatePicker
          selected={date}
          onChange={onDateChange}
          minDate={minDate}
          dateFormat="dd/MM/yyyy"
          className="bg-transparent border border-gray-300 p-2 text-gray-700 w-full appearance-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300 rounded-lg"
        />
        <svg className="w-6 h-6 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-300 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
    </div>
  );

  const PeopleSection = ({ icon, title, subtitle }) => (
    <div className="flex flex-col w-full sm:w-auto group">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
        <div className="text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-cyan-600">{title}</div>
      </div>
      <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold">
        <div className="inline-flex items-center justify-between bg-gray-200 rounded-lg px-3 py-2 transition-all duration-300 group-hover:bg-gray-300">
          <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 text-xl w-8 h-8 flex items-center justify-center" onClick={decrementCount}>-</button>
          <span className="text-gray-900 font-bold mx-4">{numberOfPeople}</span>
          <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 text-xl w-8 h-8 flex items-center justify-center" onClick={incrementCount}>+</button>
        </div>
      </div>
      <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
    </div>
  );

  const navItems = [
    { text: "Destinations", targetId: "properties-section" },
    { text: "Testimonials", targetId: "testimonials-section" },
    { text: "About us", targetId: "about-section" },
    { text: "Contact", targetId: "contact-section" },
  ];


  const scrollToProperties = () => {

    dispatch(setFormData({
      checkInDate: formatDate(checkInDate),
      checkOutDate: formatDate(checkOutDate),
      numberOfGuests: numberOfPeople.toString(),
      loading : false
    }));
  
    propertiesRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const handleCheckInChange = (date) => {
    date.setHours(0, 0, 0, 0);
    
    setCheckInDate(date);
    if (date >= checkOutDate) {
      const newCheckOutDate = new Date(date);
      newCheckOutDate.setDate(newCheckOutDate.getDate() + 1);
      newCheckOutDate.setHours(0, 0, 0, 0); 
      setCheckOutDate(newCheckOutDate);
    }
  };

  const handleCheckOutChange = (date) => {
    if (date > checkInDate) {
      date.setHours(0, 0, 0, 0);
      setCheckOutDate(date);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1A29] text-white relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-center bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082727/bg_main_rzkapc.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="absolute inset-0 bg-[#0F1A29] opacity-50"></div>
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-3 sm:p-5 md:p-6">
          <nav className="flex flex-col sm:flex-row justify-between items-center">
            <img
              src='https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082755/logo_qf2djj.png'
              alt="Mid Orchard Logo"
              className="w-[50px] sm:w-[70px] md:w-[90px] h-auto mb-3 sm:mb-0"
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 md:gap-8 lg:gap-32">
              {navItems.map((item, index) => (
                <NavItem key={index} text={item.text} targetId={item.targetId} />
              ))}
              {
                user.currentUser == null ? (<button onClick={handleClick} className="bg-[#3DBBCD] text-white px-3 sm:px-5 py-1.5 sm:py-2 md:px-6 md:py-2 rounded-xl hover:bg-teal-500 mt-2 sm:mt-0 text-sm sm:text-base w-full sm:w-auto transition-colors duration-300">
                  LOGIN
                </button>) : (<button onClick={handleClickLogOut} className="bg-[#3DBBCD] text-white px-3 sm:px-5 py-1.5 sm:py-2 md:px-6 md:py-2 rounded-xl hover:bg-teal-500 mt-2 sm:mt-0 text-sm sm:text-base w-full sm:w-auto transition-colors duration-300">
                  LOGOUT
                </button>)

              }
            </div>
          </nav>
        </header>

        <main className="px-4 sm:px-8 md:px-20 py-6 sm:py-10 md:py-16 flex-grow flex flex-col justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Hotel for <span className="text-[#3DBBCD] font-aguafina text-3xl sm:text-5xl md:text-7xl">memorable</span>
            <br />
            moments rich in
            <br />
            emotions
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl mb-6 sm:mb-8">
            Enjoy mesmerizing views of the
            <br />
            valley with a peaceful and
            <br />
            Luxurious stay
          </p>
          <button className="bg-[#3DBBCD] text-white px-4 sm:px-7 py-2 sm:py-2.5 md:px-8 md:py-3 rounded-xl hover:bg-teal-500 text-sm sm:text-base self-start transition-colors duration-300" onClick={scrollToProperties}>
            BOOK NOW
          </button>
        </main>

        <section className="bg-white text-black rounded-t-[36px] sm:rounded-tl-[72px] md:rounded-tl-[108px] p-4 sm:p-8 md:p-12 w-full sm:w-[85%] md:w-[75%] max-w-[1200px] self-end">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
            <PeopleSection
              icon="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082761/profile_icon_ejstvh.svg"
              title="Guests"
              subtitle="Add Guests"
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082743/date_icon_zikap9.svg"
              title="Check-in"
              date={checkInDate}
              subtitle="Select date"
              onDateChange={handleCheckInChange}
              minDate={today}
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082742/checkout_w9sy9b.svg"
              title="Check-out"
              date={checkOutDate}
              subtitle="Select date"
              onDateChange={handleCheckOutChange}
              minDate={new Date(checkInDate.getTime() + 86400000)} // One day after check-in
            />
            <button className="bg-[#3DBBCD] p-3 sm:p-4 rounded-xl w-full sm:w-[70px] sm:h-[70px] md:w-[113px] md:h-[113px] flex items-center justify-center hover:bg-teal-500 mt-4 sm:mt-0 transition-colors duration-300" onClick={scrollToProperties}>
              <img
                src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082768/search_khgvvs.png"
                alt="Search"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </button>
          </div>
        </section>
      </div>
      <div 
      ref = {propertiesRef}
      id="properties-section">
        <Properties/>
      </div>
      <div id="testimonials-section">
        <Testimonial/>
      </div>
      <div id="about-section">
        <Host/>
      </div>
      <div id="contact-section">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
