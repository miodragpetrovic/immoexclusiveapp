import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <header className='bg-[#212121] text-white py-8'>
        <nav className='flex flex-wrap mx-auto max-w-6xl items-center justify-between px-4'>
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
            <Button />
        </nav>
    </header>
  )
}

export default Navbar