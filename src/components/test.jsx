import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return {
    year: tomorrow.getFullYear(),
    month: tomorrow.getMonth() + 1, // months are 0-based in JS
    day: tomorrow.getDate(),
  };
};

const DateSection = ({
  icon,
  title,
  selectedDate = getTomorrowDate(),
  onDateChange,
  subtitle = "Select date",
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[30px] aspect-[1.25]" />
        <div>{title}</div>
      </div>
      <div
        className="mt-2 text-2xl font-semibold cursor-pointer"
        onClick={toggleCalendar}
      >
        {`${selectedDate.day}-${selectedDate.month}-${selectedDate.year}`}
      </div>
      {showCalendar && (
        <div className="relative z-10">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              onDateChange(date);
              setShowCalendar(false);
            }}

          />
        </div>
      )}
      <div className="mt-1 text-xl text-gray-400">{subtitle}</div>
    </div>
  );
};

const Test = () => {
  const [checkInDate, setCheckInDate] = useState(getTomorrowDate());
  const [checkOutDate, setCheckOutDate] = useState(getTomorrowDate());

  return (
    <div className="min-h-screen bg-[#0F1A29] text-white relative overflow-hidden">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082755/logo_qf2djj.png"
            alt="Logo"
            className="w-[120px] h-auto"
          />
          <div className="flex gap-8 items-center">
            <div className="text-white hover:text-teal-300 cursor-pointer">Testimonials</div>
            <div className="text-white hover:text-teal-300 cursor-pointer">About us</div>
            <div className="text-white hover:text-teal-300 cursor-pointer">Contact</div>
            <button className="bg-[#3DBBCD] text-white px-6 py-2 rounded-xl hover:bg-teal-500">
              LOGIN
            </button>
          </div>
        </nav>
      </header>

      <main className="px-20 py-16 flex-grow">
        <h1 className="text-6xl font-bold mb-4">
          Hotel for <span className="text-[#3DBBCD] font-aguafina text-7xl">memorable</span>
          <br />
          moments rich in
          <br />
          emotions
        </h1>
        <p className="text-2xl mb-8">
          Enjoy mesmerizing views of the
          <br />
          valley with a peaceful and
          <br />
          Luxurious stay
        </p>
        <button className="bg-[#3DBBCD] text-white px-8 py-3 rounded-xl hover:bg-teal-500">
          BOOK NOW
        </button>
      </main>

      <section className="absolute bottom-0 right-0 bg-white text-black rounded-tl-[108px] p-12 w-[75%] max-w-[1200px]">
        <div className="flex justify-between items-end">
          <DateSection
            icon="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082743/date_icon_zikap9.svg"
            title="Check-in"
            selectedDate={checkInDate}
            onDateChange={setCheckInDate}
          />
          <div className="w-px h-16 bg-gray-200"></div>
          <DateSection
            icon="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082742/checkout_w9sy9b.svg"
            title="Check-out"
            selectedDate={checkOutDate}
            onDateChange={setCheckOutDate}
          />
        </div>
      </section>

  
    </div>
  );
};

export default Test;
