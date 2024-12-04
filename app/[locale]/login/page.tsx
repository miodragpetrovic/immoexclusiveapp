import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="max-w-6xl px-4 py-3 my-28 text-white text-center mx-auto">
        <div className='bg-[#232323] max-w-[30rem] rounded-md shadow-lg mx-auto pb-5 pt-8 border border-[#232323] border-t-[#BAA383] border-t-[3px]'>
            <Image
            className='p-2 mx-auto'
            src='/Logo.png'
            width={300}
            height={150}
            alt='immoexclusive logo'
            />
            <div className='py-8'>
                <h2>Anmelden</h2>
                <p className='text-gray-400'>Logge dich bei immoexclusive ein</p>
            </div>
            <form action="">
                <div className='max-w-[25rem] mx-auto p-3'>
                    <input type="text" className='w-full bg-[#282828] py-3 px-4 text-base' placeholder='Benutzername oder E-Mail' />
    
                    <input type="password" className='w-full bg-[#282828] py-3 px-4 mt-2 text-base' placeholder='Passwort' />

                    <span className='flex py-3 justify-between mt-3'>
                        <div className='flex gap-2'>
                            <input type="checkbox" /><p>Angemeldet bleiben</p>
                        </div>
                        <p>Passwort vergessen?</p>
                    </span>
                    <button className='bg-[#BAA383] w-full rounded-full py-3 mt-5 shadow-md'>Einloggen</button>
                    <p className='my-5'>Noch kein Konto erstellt? <Link href='/registrieren'>Registrieren</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login