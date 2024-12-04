import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className='bg-[#121616] text-white py-4 shadow-lg'>
        <nav className='flex flex-wrap mx-auto max-w-7xl items-center justify-between px-4'>
            <button>
                <HiOutlineMenuAlt1 size={29} />
            </button>
            <p>
                <span className='logoimmo'>immo</span><span className='logoexclusive'>exclusive.ch</span>
            </p>
            <div className='flex items-center gap-4'>
                <Link href='/login'>
                    Login / Registrieren
                </Link>
                <Button />
            </div>  
        </nav>
    </header>
  )
}

export default Navbar