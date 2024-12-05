import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className='bg-none z-10 text-white py-5 shadow-lg'>
        <nav className='flex flex-wrap mx-auto container items-center justify-between px-4'>
            <div className='flex items-center gap-5'>
                <button>
                    <HiOutlineMenuAlt1 size={29} />
                </button>
            </div>
            <p>
                <span className='logoimmo'>immo</span><span className='logoexclusive'>exclusive.ch</span>
            </p>
            <div className='flex items-center gap-4'>
                <Link href='login'>
                    Login / Registrieren
                </Link>
                <Button />
            </div>  
        </nav>
    </header>
  )
}

export default Navbar