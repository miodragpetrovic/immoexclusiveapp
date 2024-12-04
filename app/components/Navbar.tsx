import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='bg-[#121616] text-white py-4 shadow-lg'>
        <nav className='flex flex-wrap mx-auto max-w-6xl items-center justify-between px-4'>
            <Link href='/'>
                <Image
                src='/Logo.png'
                width={40}
                height={50}
                alt='Logo Immoexclusive'
                />
            </Link>
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