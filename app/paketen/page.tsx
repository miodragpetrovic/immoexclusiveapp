import React from 'react'
import Image from 'next/image'
import { GoIssueClosed } from "react-icons/go";
import { SlClose } from "react-icons/sl";


const Paketen = () => {

    const packageStandard: number = 0;
    const packagePremium: number = 995;
    const packageBusiness: number = 7000;

  return (
    <>
    <div className='max-w-6xl px-4 mx-auto'>
        <h1 className='text-2xl text-white'>Immobilien inserieren</h1>
    </div>
    <div className="md:flex max-w-6xl px-4 py-3 my-28 text-white justify-center gap-5 text-center mx-auto">

        <div className='bg-[#232323] w-2xl shadow-md py-5 px-10 border border-[#232323] border-t-[#BAA383] border-b-[#BAA383]'>
            <Image
            className='p-2 mx-auto'
            src='/paketstarter.png'
            width={130}
            height={150}
            alt='immoexclusive logo'
            />
            <div className='py-8 w-2xl'>
                <h4 className='uppercase text-[#BAA383]'>Standard</h4>
                <h3>0.00 CHF</h3>
                <p>Jährlich</p>
                <hr className='border-[#323232] my-5' />
                <div className='py-4'>
                        <ul className='package-list'>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> 1 Benutzer </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Eine Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Bis 10 Fotos hochladen </li>
                            <li className='flex items-center gap-2'><SlClose size={21} color='#ff4d6d' /> Dokumenten hochladen </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet eine Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet eine Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} />inkl. MwSt.</li>
                        </ul>
                    </div>
                    <hr className='border-[#323232] my-5' />
                <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Kostenlos nutzen</button>
            </div>
        </div>

        <div className='bg-[#232323] w-2xl shadow-md py-5 px-10 border border-[#232323] border-t-[#BAA383] border-b-[#BAA383]'>
            <Image
            className='p-2 mx-auto'
            src='/paketstarter.png'
            width={130}
            height={150}
            alt='immoexclusive logo'
            />
            <div className='py-8 w-2xl'>
                <h4 className='uppercase text-[#BAA383]'>Premium</h4>
                <h3>995.- CHF</h3>
                <p className='text-sm'>Jährlich</p>
                <hr className='border-[#323232] my-5' />
                    <div className='py-4'>
                        <ul className='package-list'>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> 1 Benutzer </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet 15 Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Bis 30 Fotos hochladen </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Dokumenten hochladen </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet eine Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet eine Immobilienanzeige </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} />inkl. MwSt.</li>
                        </ul>
                    </div>
                    <hr className='border-[#323232] my-5' />
                <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Kaufen</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Paketen