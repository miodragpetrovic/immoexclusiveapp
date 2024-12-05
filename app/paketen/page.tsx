import React from 'react'
import Image from 'next/image'
import { GoIssueClosed } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import Link from 'next/link';


const Paketen = () => {


  return (
    <>
    <div className='container max-w-6xl my-5 px-14'>
        <h1 className='text-2xl text-white'></h1>
        <p className='text-white'>Das Paket Premium bietet eine attraktive Lösung für Nutzer oder Unternehmen, die umfangreiche 
            Immobilienanzeigen erstellen möchten. Mit diesem Paket können folgende Vorteile genutzt werden:
        </p>
        <ul>
            <li className='text-white'>15 Immobilienanzeigen: Jede Benutzerin bzw. jeder Benutzer oder Mitarbeiter hat die Möglichkeit, bis zu 15 verschiedene Immobilienanzeigen zu erstellen.</li>
        </ul>
    </div>
    <div className="container lg:flex grid px-4 py-3 mb-28 mt-10 text-white gap-5 text-center mx-auto">

        <div className='bg-[#232323] w-full shadow-md py-5 px-5 border border-[#232323] border-t-[#BAA383] border-b-[#BAA383]'>
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
                <p>Kostenlos</p>
                <hr className='border-[#323232] my-5' />
                    <div className='py-4'>
                        <ul className='package-list text-left'>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> 1 Benutzer </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> 1 Inserat </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Bis 10 Fotos hochladen </li>
                            <li className='flex items-center gap-2'><SlClose size={21} color='#ff4d6d' /> Dokumenten hochladen </li>
                            <li className='flex items-center gap-2'><SlClose size={21} color='#ff4d6d' /> Eintrag im Anbieterverzeichnis </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Keine automatische Verlängerung </li>
                            <li className='flex items-center gap-2 invisible'><GoIssueClosed size={22} />inkl. MwSt.</li>
                        </ul>
                    </div>
                    <Link className='pt-5 text-sm' href='/'>Preisliste ansehen</Link>
                    <hr className='border-[#323232] my-5' />
                <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Kostenlos nutzen</button>
            </div>
        </div>

        <div className='bg-[#232323] w-full shadow-md py-5 px-5 border border-[#232323] border-t-[#BAA383] border-b-[#BAA383]'>
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
                <p className='text-sm'>Jahresabo</p>
                <hr className='border-[#323232] my-5' />
                    <div className='py-4'>
                        <ul className='package-list text-left'>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> 1 Benutzer </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Beinhaltet 10 Inseraten </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Pro Inserat 30 Fotos </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Dokumenten hochladen </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Eintrag im Anbieterverzeichnis </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Keine automatische Verlängerung </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> inkl. MwSt. </li>
                        </ul>
                    </div>
                    <Link className='pt-5 text-sm' href='/'>Preisliste ansehen</Link>
                    <hr className='border-[#323232] my-5' />
                <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Kaufen</button>
            </div>
        </div>

        <div className='bg-[#232323] w-full shadow-md py-5 px-5 border border-[#232323] border-t-[#BAA383] border-b-[#BAA383]'>
            <Image
            className='p-2 mx-auto'
            src='/paketstarter.png'
            width={130}
            height={150}
            alt='immoexclusive logo'
            />
            <div className='py-8 w-2xl'>
                <h4 className='uppercase text-[#BAA383]'>Business</h4>
                <h3>6’965.- CHF</h3>
                <p className='text-sm'>Jahresabo</p>
                <hr className='border-[#323232] my-5' />
                    <div className='py-4'>
                        <ul className='package-list text-left'>
                            <li className='flex items-center gap-2 text-md'><GoIssueClosed size={22} /> 10 Benutzer </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Pro Benutzer 10 Inseraten </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Pro Inserat 30 Fotos </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Dokumenten hochladen </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Eintrag im Anbieterverzeichnis </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} /> Keine automatische Verlängerung </li>
                            <li className='flex items-center gap-2'><GoIssueClosed size={22} />inkl. MwSt.</li>
                        </ul>
                    </div>
                    <Link className='pt-5 text-sm' href='/'>Preisliste ansehen</Link>
                    <hr className='border-[#323232] my-5' />
                <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Kaufen</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Paketen