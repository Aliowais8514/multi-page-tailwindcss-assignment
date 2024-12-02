"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => { // Changed 'contact' to 'Contact' to follow React's naming convention

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-gradient-to-r from-pink-400 to-blue-400 shadow-lg rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center hover:underline' data-aos="fade-up">
          <span>C</span>ontact Us
        </h2>
        <form>
          <input
            type="text"
            placeholder='Full Name'
            className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300'
            required
            aria-label="Full Name"
          />
          <input
            type="email"
            placeholder='Email Address'
            className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300'
            required
            aria-label="Email Address"
          />
          <input
            type="text"
            placeholder='Phone Number'
            className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300'
            required
            aria-label="Phone Number"
          />
          <textarea
            placeholder='Your Message...'
            className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300'
            rows={5}
            required
            aria-label="Your Message"
          />
          <button
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300'
            type='submit'
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact; // Exported 'Contact' component
