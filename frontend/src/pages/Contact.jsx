import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div className='bg-white text-gray-700'>
      {/* Heading Section */}
      <div className='pt-12 text-3xl font-bold text-center text-gray-800 border-t border-gray-200'>
        <Title text1={'CONTACT'} text2={'US'} />
        <p className='mt-2 text-sm font-light text-gray-500'>
          We'd love to hear from you! Reach out with questions, collaborations, or to celebrate the art of Uttarakhand with us.
        </p>
      </div>

      {/* Main Contact Info Section */}
      <div className='flex flex-col items-center justify-center gap-12 px-6 py-12 mx-auto my-12 md:flex-row md:px-20 lg:px-32 bg-gradient-to-br from-[#f9f5f2] to-[#fefefe] shadow-md rounded-xl'>

        {/* Contact Image */}
        <img
          className='w-full max-w-md rounded-lg shadow-lg md:max-w-[480px]'
          src={assets.contact_img}
          alt="Traditional Art Store"
        />

        {/* Contact Details */}
        <div className='flex flex-col items-start gap-6'>
          <h3 className='text-xl font-semibold text-gray-800'>🌿 Our Traditional Art Store</h3>
          <p className='text-gray-600 leading-relaxed'>
            Uttarakhand Handicrafts<br />
            354 Handicraft Lane, Nainital<br />
            Uttarakhand, India
          </p>

          <p className='text-gray-600'>
            📞 (+91)-123-456-7890<br />
            📧 contact.uttarakhandart@info.com
          </p>

          <h3 className='pt-4 text-xl font-semibold text-gray-800'>✨ Join Us in Celebrating Art</h3>
          <p className='text-gray-600 leading-relaxed'>
            Be part of something meaningful. Help us promote Uttarakhand’s cultural legacy by working with artisans and spreading the beauty of handmade crafts.
          </p>

          <button className='px-6 py-3 mt-2 text-sm font-medium text-white transition-all duration-300 bg-[#2d2d2d] hover:bg-[#444] rounded-full shadow'>
            Explore Careers
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
