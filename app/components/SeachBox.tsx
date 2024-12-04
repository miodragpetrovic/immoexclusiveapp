'use client';

import { useState } from 'react';
import { TbZoom } from "react-icons/tb";
import { HiOutlineAdjustments } from "react-icons/hi";



const SearchBox = () => {

  return (
    <div className="rounded-lg shadow-lg">

      {/* Tabs */}
      <div className='flex text-gray-500'>
        <button className='bg-[#212121] font-medium text-sm py-4 px-6 rounded-tl-lg'>
            Mieten
        </button>
        <button className='bg-[#212121] font-medium text-sm py-4 px-6 border border-l-1 rounded-tr-lg'>
            Kaufen
        </button>
      </div>
      <div className='bg-[#212121] rounded-tr-lg rounded-br-lg rounded-bl-lg'>
        <div className='grid md:flex md:px-5 py-4 gap-3'>
            <input type="text" className='w-full bg-[#F7F7F7] px-3 py-1' placeholder='Ort, PLZ, Kanton' />
            <input type="text" className='w-full bg-[#F7F7F7] px-3 py-1' placeholder='Preis bis' />
            <input type="text" className='w-full bg-[#F7F7F7] px-3 py-1' placeholder='Zimmer von' />
            <button className='bg-[#BAA383] rounded-full p-5'><HiOutlineAdjustments size={25} /></button>
            <button className='bg-[#BAA383] rounded-full p-5'><TbZoom size={25} /></button>
        </div>
      </div>

    </div>
  );
};

export default SearchBox;