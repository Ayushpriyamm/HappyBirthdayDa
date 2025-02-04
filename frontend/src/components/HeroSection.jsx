import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Crafting Custom Kids' Worksheets to{" "}
            <span className="text-blue-600">
              Cater to Individual Learning Needs!
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Affordable printables and booklets for smarter learning.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              📥 Browse Worksheets
            </a>
            <a
              href="#"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition"
            >
              ✨ Customize My Child’s Learning
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2024/09/17/09/34/boy-9053203_640.png"
            alt="Kid Studying"
            className="max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
