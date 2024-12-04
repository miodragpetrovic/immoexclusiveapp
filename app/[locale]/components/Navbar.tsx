import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import LanguageSwitcher from './LanguageSwitcher';
import NavigationLink from '../components/NavigationLink';
import { useTranslations } from 'next-intl';

const Navbar = () => {
    const t = useTranslations('HomePage')
  return (
    <header className='bg-none z-10 text-white py-5 shadow-lg'>
        <nav className='flex flex-wrap mx-auto max-w-7xl items-center justify-between px-4'>
            <div className='flex items-center gap-5'>
                <button>
                    <HiOutlineMenuAlt1 size={29} />
                </button>
                <LanguageSwitcher />
            </div>
            <p>
                <span className='logoimmo'>immo</span><span className='logoexclusive'>exclusive.ch</span>
            </p>
            <div className='flex items-center gap-4'>
                <NavigationLink href='/login'>
                    {t('LoginAndRegistration')}
                </NavigationLink>
                <Button />
            </div>  
        </nav>
    </header>
  )
}

export default Navbar