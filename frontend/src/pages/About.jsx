import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div className="bg-[#fefbf8] text-[#4a2c1a] px-6 sm:px-12">
      {/* About Title */}
      <div className="pt-8 text-center border-t border-[#e5ded7]">
        <Title text1="ABOUT" text2="US" />
        <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
          Dive into the rich cultural heritage of Uttarakhand through the intricate and timeless craftsmanship of local artisans.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col gap-8 md:flex-row my-12 items-center justify-center">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="Traditional Art"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to our world of <span className="font-semibold text-[#7c4a2f]">traditional Uttarakhand art</span>. Our mission is to bring you closer to the soulful and intricate arts created by local artisans. Every piece tells a story, weaving together centuries of heritage, culture, and craftsmanship.
          </p>
          <p>
            From the vivid Aipan designs to the delicate wooden artifacts, we curate each product with care to reflect the spirit of Uttarakhand. Our artisans, primarily women from rural areas, handcraft each item using age-old techniques that have been passed down through generations.
          </p>

          <div>
            <h3 className="font-bold text-[#4a2c1a] mb-1">Our Mission</h3>
            <p>
              Our mission is to preserve and promote the traditional arts of Uttarakhand, empowering local artisans by providing them with a global platform.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#4a2c1a] mb-1">Our Vision</h3>
            <p>
              We envision a future where the traditional arts of Uttarakhand are cherished globally, bringing greater opportunities for artisans and reviving these unique forms of expression.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center py-8 bg-[#fff7ef] rounded-lg shadow-sm">
        <Title text1="WHY" text2="CHOOSE US" />
        <div className="grid md:grid-cols-3 gap-6 px-6 md:px-16 mt-8 text-sm text-gray-700">
          <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition duration-300">
            <h4 className="font-semibold mb-2 text-lg text-[#5e3825]">Authentic Handicrafts</h4>
            <p>
              Each product is handcrafted with precision, representing the authentic artistry of Uttarakhand. Our pieces are crafted with local materials, preserving both tradition and sustainability.
            </p>
          </div>
          <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition duration-300">
            <h4 className="font-semibold mb-2 text-lg text-[#5e3825]">Empowering Artisans</h4>
            <p>
              By supporting our artisans, especially women from rural communities, we ensure fair trade practices and provide them with the tools to flourish.
            </p>
          </div>
          <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition duration-300">
            <h4 className="font-semibold mb-2 text-lg text-[#5e3825]">Cultural Revival</h4>
            <p>
              We are committed to reviving and preserving the traditional art forms of Uttarakhand, bringing them to the world stage while retaining their authenticity.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default About;
