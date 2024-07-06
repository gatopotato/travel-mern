import React from 'react';

function MBookingForm() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6">
      <form className="flex justify-between items-center">
        <div className="flex-1 border-r pr-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Guests</label>
          <div className="text-black font-bold">3 Person</div>
          <div className="text-gray-500 text-sm">2 Adult, 1 Child</div>
        </div>
        <div className="flex-1 border-r px-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Check-in</label>
          <div className="text-black font-bold">16 June 2024</div>
          <div className="text-gray-500 text-sm">Select date</div>
        </div>
        <div className="flex-1 pl-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Check-out</label>
          <div className="text-black font-bold">20 June 2024</div>
          <div className="text-gray-500 text-sm">Select date</div>
        </div>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default MBookingForm;