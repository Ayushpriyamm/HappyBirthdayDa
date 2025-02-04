import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for the worksheets (you can replace this with dynamic data later)
  const worksheets = [
    {
      id: 1,
      title: "Alphabet’s Trek Worksheet",
      ageGroup: "3-4 Yrs",
      format: "Printable",
      price: 39,
      isBestSeller: true,
      isNewArrival: false,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      title: "Numbers Learning Worksheet",
      ageGroup: "4-6 Yrs",
      format: "Booklet",
      price: 279,
      isBestSeller: false,
      isNewArrival: true,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "Phonics Adventure Worksheet",
      ageGroup: "2-3 Yrs",
      format: "Printable",
      price: 39,
      isBestSeller: false,
      isNewArrival: false,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Our Learning Packages
        </h2>

        <div className="mt-10">
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              className="w-full p-4 pl-12 bg-white border border-gray-300 rounded-lg"
              placeholder="Search worksheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Filter Options */}
          <div className="flex justify-center gap-8 text-gray-700 mb-12">
            <select className="bg-white border px-4 py-2 rounded-lg">
              <option>Age Group: 2-3 Yrs</option>
              <option>Age Group: 3-4 Yrs</option>
              <option>Age Group: 4-6 Yrs</option>
              <option>Age Group: 6+ Yrs</option>
            </select>
            <select className="bg-white border px-4 py-2 rounded-lg">
              <option>Type: Printable</option>
              <option>Type: Booklet</option>
            </select>
            <select className="bg-white border px-4 py-2 rounded-lg">
              <option>Subjects: Alphabet</option>
              <option>Subjects: Numbers</option>
              <option>Subjects: Phonics</option>
              <option>Subjects: EVS</option>
              <option>Subjects: Maths</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {worksheets
              .filter((worksheet) =>
                worksheet.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((worksheet) => (
                <div
                  key={worksheet.id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="relative">
                    {/* Product Tags */}
                    {worksheet.isBestSeller && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
                        Best-Seller
                      </div>
                    )}
                    {worksheet.isNewArrival && (
                      <div className="absolute top-4 left-24 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
                        New Arrival
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={worksheet.image}
                      alt={worksheet.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {worksheet.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{worksheet.ageGroup}</p>
                    <div className="flex justify-between mt-4">
                      <div className="text-xl font-semibold text-gray-800">
                        ₹{worksheet.price}
                      </div>
                      <div className="flex gap-4">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
                          Buy Now
                        </button>
                        <button className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-all">
                          Watch Sample
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
