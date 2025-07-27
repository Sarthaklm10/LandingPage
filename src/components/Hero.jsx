import React from "react";
import heroBg from "../assets/images/2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-[calc(100vh-80px)]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center h-full text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Empowering Communities for a Better Future
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Join Suvidha Foundation in our mission to provide education,
          healthcare, and sustainable solutions to those in need.
        </p>
        <a
          href="#about"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
