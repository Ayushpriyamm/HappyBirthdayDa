import React from "react";
import {
  FaRegMoneyBillAlt,
  FaPaintBrush,
  FaPrint,
  FaBook,
} from "react-icons/fa"; // Importing icons

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Why Choose KnowledgePrep?
        </h2>
        <p className="mt-4 text-lg text-gray-600">Trust & Benefits</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Benefit 1: Pay Less, Learn More */}
          <div className="flex flex-col items-center text-gray-700">
            <FaRegMoneyBillAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">💡 Pay Less, Learn More</h3>
            <p className="mt-2 text-gray-600">
              Affordable worksheets starting at just ₹19!
            </p>
          </div>

          {/* Benefit 2: Personalized & Engaging */}
          <div className="flex flex-col items-center text-gray-700">
            <FaPaintBrush className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">
              🎯 Personalized & Engaging
            </h3>
            <p className="mt-2 text-gray-600">
              Custom flashcards & worksheets to match your child’s pace.
            </p>
          </div>

          {/* Benefit 3: Print What You Need */}
          <div className="flex flex-col items-center text-gray-700">
            <FaPrint className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">🖨️ Print What You Need</h3>
            <p className="mt-2 text-gray-600">
              Reduce waste & save on unnecessary printing.
            </p>
          </div>

          {/* Benefit 4: Booklets for Hands-on Learning */}
          <div className="flex flex-col items-center text-gray-700">
            <FaBook className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">
              📚 Booklets for Hands-on Learning
            </h3>
            <p className="mt-2 text-gray-600">
              Ready-to-use, premium-quality books delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
