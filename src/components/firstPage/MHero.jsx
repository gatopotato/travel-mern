import React from 'react';

function MHero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('path_to_mountain_image.jpg')"}}>
        <div className="absolute inset-0 bg-navy-900 opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full px-12">
        <h1 className="text-6xl font-bold mb-4">
          Hotel for <span className="text-teal-500 italic">memorable</span><br />
          moments rich in<br />
          emotions
        </h1>
        <p className="text-xl mb-8 max-w-md">
          Enjoy mesmerizing views of the valley with a peaceful and Luxurious stay
        </p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-full w-40 text-lg">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default MHero;