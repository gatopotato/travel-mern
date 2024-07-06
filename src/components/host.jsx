import * as React from "react";

const HostProfile = ({ name, location, description, imageSrc, isReversed }) => (
  <section className={`relative px-16 mt-24 w-full rounded-2xl bg-blue-950 bg-opacity-75 max-md:px-5 max-md:mt-10 max-md:max-w-full ${isReversed ? 'text-right' : ''} transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-teal-400/30`}>
    <div className={`flex gap-5 ${isReversed ? 'flex-row-reverse' : ''} max-md:flex-col max-md:gap-0`}>
      <div className={`flex flex-col w-[70%] max-md:ml-0 max-md:w-full ${isReversed ? 'items-end' : ''}`}>
        <div className="flex relative z-10 flex-col grow pb-6 -mt-1 max-md:max-w-full">
          <h2 className={`text-4xl font-semibold text-white ${isReversed ? 'self-end' : 'self-start'} transition-all duration-300 hover:text-teal-400`}>
            {name}, {location}
          </h2>
          <div className={`w-48 h-1 bg-teal-400 mt-2 ${isReversed ? 'self-end' : 'self-start'} transition-all duration-300 hover:w-56`}></div>
          <p className="mt-6 text-3xl font-bold text-zinc-500 max-md:max-w-full transition-all duration-300 hover:text-zinc-300">
            {description}
          </p>
        </div>
      </div>
      <div className={`flex flex-col w-[30%] max-md:ml-0 max-md:w-full ${isReversed ? 'mr-5' : 'ml-5'}`}>
        <div className="relative w-full h-0 pb-[100%] group">
          <div className="absolute inset-0 bg-teal-400 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105">
            <img src={imageSrc} alt={`${name} profile`} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
          </div>
          <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-yellow-400"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full translate-x-1/4 translate-y-1/4 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-100"></div>
        </div>
      </div>
    </div>
  </section>
);

function Host() {
  const hosts = [
    {
      name: "Abhishek Taneja",
      location: "Kasol",
      description: "I am a B.Tech graduate in ECE with professional experience at Ericsson Global India, Noida (2014-2016). Since 2016, I have specialized in the tourism industry, developing and managing PAN India travel packages and operations for destinations such as Andaman, Kerala, Sikkim, Meghalaya, Himachal Pradesh, Uttarakhand, as well as international locations like Singapore, Maldives, Bali, and Dubai. In 2019, I founded and currently manage three hospitality properties in Himachal.",
      imageSrc: 'https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082716/abhishek_xkuh44.png'
    },
    {
      name: "Sahil Bachan",
      location: "Manali",
      description: "I'm Sahil, a former engineer turned successful hospitality entrepreneur from Dobhi, Kullu, HP. After shifting from IT in 2014, I founded 'Camping Kona' in 2015, offering luxury camps. In 2018, I co-founded Mid Orchard, known for cottages, hostels, and hotels, where we're cherished as 'Host and Dost.' Combining technical expertise with local charm, I'm passionate about creating memorable stays in Himachal Pradesh.",
      imageSrc: 'https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082768/sahil_muo2cz.png'
    }
  ];

  return (
    <main className="flex flex-col justify-center bg-slate-800 bg-cover bg-center" style={{ backgroundImage: `url(/src/assets/bg_host.png)` }}>
      <div className="flex overflow-hidden relative flex-col px-5 pt-7 pb-16 w-full min-h-[947px] max-md:max-w-full">
        <h1 className="relative self-center text-5xl font-semibold text-white max-md:max-w-full max-md:text-6xl">
          Know more about your Hosts
        </h1>
        <img loading="lazy" src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082855/underline_hilihk.png" alt="" className="self-center max-w-full aspect-[8.33] fill-teal-400 w-[284px] transition-all duration-300 hover:scale-110" />
        
        <HostProfile {...hosts[0]} isReversed={false} />
        <HostProfile {...hosts[1]} isReversed={true} />
      </div>
    </main>
  );
}

export default Host;
