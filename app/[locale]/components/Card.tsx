import React from 'react'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import { IoGitCompareSharp } from "react-icons/io5";


const Card = () => {
  return (
    <section>
        <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col h-72 md:flex-row bg-white shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-40 md:w-1/3 md:h-auto">
          <Image
            src="/wohnung.jpg" // Replace with your local image in the `public` folder
            alt="House"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex bg-[#444444] border-none h-72 justify-center flex-col p-8 md:w-2/3">
          {/* Title and Price */}
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-white">
              Beautiful Family Home
            </h2>
            <IoGitCompareSharp size={23} />
          </div>

          {/* Description */}
          <p className="text-sm text-white mt-2">
            This charming 3-bedroom, 2-bathroom home features modern amenities
            and a spacious backyard perfect for entertaining.
          </p>

          <h3 className="font-bold text-white text-xxl mt-5">250,000 CHF</h3>

          {/* Features */}
          <div className="flex items-center space-x-6 mt-4 text-white">
            <div className="flex items-center">
              <FaBed size={25} className="text-[#BAA383] mr-1" />
              <span>3 Zimmer</span>
            </div>
            <div className="flex items-center">
              <FaBath size={25} className="text-[#BAA383] mr-1" />
              <span>2 Bad</span>
            </div>
            <div className="flex items-center">
              <BiArea size={25} className="text-[#BAA383] mr-1" />
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