import React from 'react'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

const Card = () => {
  return (
    <section>
        <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-48 md:w-1/3 md:h-auto">
          <Image
            src="/wohnung.jpg" // Replace with your local image in the `public` folder
            alt="House"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col p-4 md:w-2/3">
          {/* Title and Price */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Beautiful Family Home
            </h2>
            <h3 className="text-lg font-bold text-indigo-600">$250,000</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2">
            This charming 3-bedroom, 2-bathroom home features modern amenities
            and a spacious backyard perfect for entertaining.
          </p>

          {/* Features */}
          <div className="flex items-center space-x-6 mt-4 text-gray-700">
            <div className="flex items-center">
              <FaBed className="text-indigo-500 mr-1" />
              <span>3 Zimmer</span>
            </div>
            <div className="flex items-center">
              <FaBath className="text-indigo-500 mr-1" />
              <span>2 Bad</span>
            </div>
            <div className="flex items-center">
              <BiArea className="text-indigo-500 mr-1" />
              <span>1800 Fläche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Card