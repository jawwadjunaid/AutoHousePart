import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  './TipsCarousel.css';
const tipsData = [
  { id: 1, text: "Tip 1: Always check your engine oil levels.", icon: "\u26FD" },
  { id: 2, text: "Tip 2: Regularly replace your air filters.", icon: "\u26FD" },
  { id: 3, text: "Tip 3: Maintain proper tire pressure.", icon: "\u26FD" },
  { id: 4, text: "Tip 4: Keep an eye on brake fluid levels.", icon: "\u26FD" },
  { id: 5, text: "Tip 5: Change spark plugs periodically.", icon: "\u26FD" },
  { id: 6, text: "Tip 6: Don’t ignore warning lights.", icon: "\u26FD" },
  { id: 7, text: "Tip 7: Wash your car to prevent rust.", icon: "\u26FD" },
  { id: 8, text: "Tip 8: Ensure headlights are clean.", icon: "\u26FD" },
  { id: 9, text: "Tip 9: Check battery terminals regularly.", icon: "\u26FD" },
];

const TipsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? tipsData.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === tipsData.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-black py-16 px-4 text-white" style={{ backgroundImage: "url('/background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase">Essential Tips For Vehicle Care</h2>
        <p className="text-gray-300 mt-2">Follow these tips to keep your vehicle in top shape.</p>
      </div>
      
      <div className="relative max-w-5xl mx-auto flex items-center">
        <button onClick={prevSlide} className="absolute left-0 bg-gray-700 p-3 rounded-full hover:bg-red-600 transition">
          <FaArrowLeft size={20} />
        </button>
        
        <div className="grid grid-cols-3 gap-6 w-full overflow-hidden">
          {tipsData.slice(currentIndex, currentIndex + 3).map((tip) => (
            <div key={tip.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700">
              <div className="text-red-500 text-4xl mb-4">{tip.icon}</div>
              <p className="text-gray-300">{tip.text}</p>
            </div>
          ))}
        </div>
        
        <button onClick={nextSlide} className="absolute right-0 bg-gray-700 p-3 rounded-full hover:bg-red-600 transition">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TipsCarousel;
