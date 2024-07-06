import React from 'react';

function MHeader() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-xl font-bold border border-teal-500 p-2">Mid Orchard</div>
      <nav>
        <ul className="flex space-x-6">
          <li>Testimonials</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className="bg-teal-500 px-4 py-2 rounded">LOGIN</button>
    </header>
  );
}

export default MHeader;