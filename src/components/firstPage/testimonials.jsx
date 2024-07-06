import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Arushi Goyal",
    location: "Visitor Manali",
    avatar: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/girl1_lfcrqy.png",
    rating: 5,
    text: "My stay at Ringen by Mid Orchards was great! I stayed at one of the rooms in the main cottage which had beautiful interiors and a balcony with an amazing mountain view. It also had a common room with a fireplace and great wooden decor. The property is easily accessible and very peaceful. The food was good and staff is very polite. I highly recommend staying at one of the premium luxury rooms of Ringen for the best experience."
  },
  {
    id: 2,
    name: "Hemant Kumar",
    location: "Kasol Visitor",
    avatar: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/boy1_ikp0p7.png",
    rating: 4,
    text: "We looked for many hotels online, found this one fascinating. After staying here for 2 days, I must say this is one of the finest property and we loved the food. I think this is the only pure vegetarian hotel in Kasol."
  },
  {
    id: 3,
    name: "Rohit Seth",
    location: "Local Guide",
    avatar: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/boy2_exqfe5.png",
    rating: 5,
    text: "Mid Orchard folks are making quite a mark in the hospitality scene in kullu- manali sector. The latest addition to Mid Orchard brand is Aangan. This place is plush with white glove feel at rather great prices. The place is vegan and Jain friendly. Great kitchen which serves great food. Not to mention the hidden gems in the valley which you can visit."
  },
  {
    id: 4,
    name: "Siddhi Mishra",
    location: "Visitor Kasol",
    avatar: "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/girl2_z0d2ym.png",
    rating: 5,
    text: "Stayed for 3 days in this lovely place. The staff is very cooperative and helpful. Also, the river side view is amazing from the hotel. We were only 2 girls and felt completely safe and comfortable throughout our stay. Highly recommend this place."
  }
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentTestimonial((prev) => {
          const nextIndex = (testimonials.findIndex(t => t.id === prev.id) + 1) % testimonials.length;
          return testimonials[nextIndex];
        });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(e.target.alt)}&background=random`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-[#162237] relative bg-opacity-100" 
         style={{backgroundImage: "url('https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082736/bg_testimonial_uzluuy.png')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-4xl w-full relative z-10">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 relative inline-block
                       hover:text-teal-400 transition-colors duration-300">
          Testimonials
          <span className="absolute -bottom-2 left-0 w-full h-1 sm:h-2 bg-teal-400
                           transition-all duration-300 hover:w-0"></span>
        </h1>
        
        <div className="relative pb-20">
          <div className="bg-white bg-opacity-95 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg 
                          transition-all duration-300 hover:shadow-2xl hover:bg-opacity-100
                          transform hover:scale-105"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <img 
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0 border-2 sm:border-4 border-teal-400 shadow-md
                           transition-transform duration-300 hover:scale-110"
                onError={handleImageError}
              />
              <div className="flex-grow text-center sm:text-left">
                <h2 className="font-semibold text-xl sm:text-2xl text-gray-800 mb-1
                               hover:text-teal-600 transition-colors duration-300">{currentTestimonial.name}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-2
                              hover:text-gray-800 transition-colors duration-300">{currentTestimonial.location}</p>
                <div className="flex justify-center sm:justify-start text-yellow-400 mt-1 sm:mt-2 text-lg sm:text-xl
                                hover:text-yellow-500 transition-colors duration-300">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < currentTestimonial.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700
                              hover:text-gray-900 transition-colors duration-300">{currentTestimonial.text}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 right-0 flex justify-end space-x-2 sm:space-x-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className={`w-16 h-24 sm:w-20 sm:h-28 bg-gray-300 rounded-lg relative overflow-hidden cursor-pointer 
                            transition-all duration-300 hover:shadow-md hover:scale-105
                            ${currentTestimonial.id === testimonial.id ? 'ring-2 ring-teal-400' : ''}`}
                onClick={() => setCurrentTestimonial(testimonial)}
              >
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;