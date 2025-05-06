import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-lg border border-[#e0d6cc] bg-gradient-to-br from-[#fffdf9] to-[#f7eee7]">
      {/* Hero Left Side */}
      <div className="flex items-center justify-center w-full py-12 sm:w-1/2 bg-[url('https://www.transparenttextures.com/patterns/paisley.png')] bg-repeat px-8 sm:px-12">
        <div className="text-[#4e2c13] max-w-md">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 md:w-11 h-[2px] bg-[#4e2c13]"></div>
            <p className="text-sm font-medium md:text-base tracking-wide">HANDCRAFTED TREASURES</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-snug font-bold prata-regular mb-4 drop-shadow-sm">
            Experience the Soul of<br />Uttarakhand’s Traditional Art
          </h1>
          <p className="text-base text-[#6a4e3a] mb-6">
            Discover intricately made crafts that reflect the rich heritage and heartfelt creativity of our artisans.
          </p>
          <button className="bg-[#8d4f2c] hover:bg-[#a75e3b] text-white px-5 py-2 rounded-full font-medium transition duration-300">
            Discover Crafts
          </button>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://wandersky.in/wp-content/uploads/2023/08/Uttarakhand-Traditional-Crafts-Handicrafts-and-Artistry.jpg"
          alt="Uttarakhand Traditional Art"
        />
      </div>
    </div>
  );
};

export default Hero;
