import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-14 px-4 sm:px-8 lg:px-16 bg-[#fffdf9]">
      {/* Section Title */}
      <div className="py-8 text-center">
        {/* ✨ Powerful & Heartfelt Heading */}
        <Title 
          text1="HERITAGE IN EVERY THREAD," 
          text2="ART FROM THE HEART OF UTTARAKHAND" 
        />
        
        {/* Decorative line */}
        <div className="w-12 h-[2px] bg-[#a0613b] mx-auto my-2 rounded-full"></div>
        
        {/* Subheading */}
        <p className="w-full max-w-2xl mx-auto text-sm text-[#5a3922] font-light sm:text-base">
          Discover timeless traditions woven with care, reflecting the spirit, stories, and soul of the hills.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2 border border-[#f2e4d8]"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
            {/* Optional Badge */}
            <span className="absolute top-2 right-2 bg-[#e6cbb4] text-[#4a2c1a] text-[10px] px-2 py-[2px] rounded-full font-medium">
              🌼 Handcrafted
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
