import React from 'react'
import Link from 'next/link';

const Button = () => {
  return (
    <Link href='/paketen' className='rounded-full border border-[#BEAD8E] hover:bg-[#BEAD8E] py-2 px-4'>
        Inserieren
    </Link>
  )
}

export default Button