'use client';

import { useState } from 'react';
import { TbZoom } from "react-icons/tb";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useTranslations } from 'next-intl';



const SearchBox = () => {

  const t = useTranslations('HomePage');

  return (
    <div className="rounded-lg shadow-2xl">

      {/* Tabs */}
      <div className='flex text-gray-500'>
        <button className='bg-[#212121] font-medium text-sm py-4 px-6 border-r-2 border-r-[#292929] rounded-tl-xl'>
            {t('tabrent')}
        </button>
        <button className='bg-[#212121] font-medium text-sm py-4 px-6 rounded-tr-xl'>
            {t('tabbuy')}
        </button>
      </div>
      <div className='bg-[#212121] rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        <div className='grid md:flex md:px-5 py-8 gap-3'>
            <div className='grid md:flex'>
                <input type="text" className='w-full border-r-2 rounded-l-xl border-[#292929] bg-[#333333] px-3 py-1' placeholder='Ort, PLZ, Kanton' />
                <input type="text" className='w-full border-r-2 border-[#292929] bg-[#333333] px-3 py-1' placeholder='Preis bis' />
                <input type="text" className='w-full rounded-r-xl bg-[#333333] px-3 py-1' placeholder='Zimmer von' />
                </div>
            <div className='flex gap-2'>
                <button className='bg-[#BAA383] rounded-full p-5'><HiOutlineAdjustments size={27} /></button>
                <button className='bg-[#BAA383] rounded-full p-5 shadow-md'><TbZoom size={27} /></button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default SearchBox;