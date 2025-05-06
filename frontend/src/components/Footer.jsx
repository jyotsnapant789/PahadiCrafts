import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#fefaf6] text-[#5c3a21] pt-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm px-6 sm:px-10 lg:px-20">
        {/* Brand and Description */}
        <div>
          <Link to="/">
            <img src={assets.logo} className="w-32 mb-5 cursor-pointer" alt="Uttarakhand Kala" />
          </Link>
          <p className="w-full md:w-2/3 text-[#6b4e2e]">
            Thank you for supporting the art and culture of Uttarakhand. Every item you find here is handcrafted with love by local artisans — keeping heritage alive, one masterpiece at a time. Stay connected with us to discover the soulful beauty of our land.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="mb-5 text-xl font-semibold">EXPLORE</p>
          <ul className="flex flex-col gap-2 text-[#6b4e2e]">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/collections"><li>Collections</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="mb-5 text-xl font-semibold">CONNECT</p>
          <ul className="flex flex-col gap-2 text-[#6b4e2e]">
            <li>📞 +91-98765-43210</li>
            <li>📧 support@uttarakhandkala.com</li>
            <li>📍 Uttarakhand, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#e7d8c7] mt-10">
        <p className="py-5 text-sm text-center text-[#7a5a3a]">
          © 2024 Uttarakhand Kala. Preserving heritage, empowering hands.
        </p>
      </div>
    </div>
  );
};

export default Footer;
