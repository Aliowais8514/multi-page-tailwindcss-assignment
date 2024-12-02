"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const watchesData = [
  {
    name: "Classic Tee",
    id: 1,
    title: "Timeless Comfort",
    price: 1200,
    img: "/img1.jpeg",
  },
  {
    name: "Sporty Fit",
    id: 2,
    title: "Active and Stylish",
    price: 800,
    img: "/img2.jpeg",
  },
  {
    name: "Premium Cotton",
    id: 3,
    title: "Soft & Elegant",
    price: 600,
    img: "/img3.jpeg",
  },
  {
    name: "Urban Vibe",
    id: 4,
    title: "Casual Cool",
    price: 500,
    img: "/img4.jpeg",
  },
  {
    name: "Bold Statement",
    id: 5,
    title: "Rugged & Tough",
    price: 1100,
    img: "/img5.jpeg",
  },
  {
    name: "Everyday Wear",
    id: 6,
    title: "Comfortable & Reliable",
    price: 900,
    img: "/img7.jpeg",
  },
];

const Watches = () => { // Changed 'watches' to 'Watches' to follow React's naming convention

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {watchesData.map((watch) => (
        <div
          key={watch.id}
          className="watch-card bg-white p-5 rounded-md shadow-md text-center"
          data-aos="fade-up"
        >
          <img
            src={watch.img}
            alt={`Image of ${watch.name} - ${watch.title}`}
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-2xl font-bold" data-aos="fade-right">
            {watch.name}
          </h3>
          <p className="text-gray-500" data-aos="fade-left">
            {watch.title}
          </p>
          <div className="price text-blue-500 text-xl font-semibold mt-2" data-aos="fade-right">
            ${watch.price}
          </div>
          <button
            className="mt-4 hover:bg-blue-600 transform transition-all duration-300 hover:scale-110 bg-blue-500 px-8 py-2 text-white rounded-full border-none"
            data-aos="fade-up"
            type="button" // Added type="button" to prevent form submission
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watches; // Exported 'Watches' component
