"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <section
        className="hero h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-img1.jpg)" }}
      >
        <div className="pl-0 md:pl-16 text-white text-center">
          <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">
            Welcome to Clothes World
          </h1>
          <p className="text-2xl mt-4" data-aos="fade-right">
            Your one-stop shop for the best watches
          </p>
          <button
            className="mt-6 bg-blue-500 px-6 py-3 hover:bg-blue-700 rounded-lg font-bold hover:translate-x-5 transform transition-all duration-300"
            data-aos="fade-down"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
