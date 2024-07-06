import React, { useState } from 'react';
import { Datepicker } from 'flowbite-datepicker';

const DateSection = ({ icon, title, date, subtitle }) => {
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (newDate) => {
    console.log('i am here')
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[30px] aspect-[1.25]" />
        <div>{title}</div>
      </div>
      <div className="mt-2 text-2xl font-semibold cursor-pointer" onClick={toggleCalendar}>
        {selectedDate}
      </div>
      {showCalendar && (
        <div className="relative">
          <Datepicker
            onSelect={handleDateChange}
            initialDate={new Date(selectedDate)}
          />
        </div>
      )}
      <div className="mt-1 text-xl text-gray-400">{subtitle}</div>
    </div>
  );
};

export default DateSection;
