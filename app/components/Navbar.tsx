import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='bg-[#121616] text-white py-4 shadow-lg'>
        <nav className='flex flex-wrap mx-auto max-w-6xl items-center justify-between px-4'>
            <Image
            src='/Logo.png'
            width={70}
            height={70}
            alt='Logo Immoexclusive'
            />
            <ul className='flex gap-4'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>Kaufen</Link>
                </li>
                <li>
                    <Link href='/'>Mieten</Link>
                </li>
                <li>
                    <Link href='/'>Kontakt</Link>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <Link href='/'>
                    Login / Registrieren
                </Link>
                <Button />
            </div>  
        </nav>
    </header>
  )
}

export default Navbar