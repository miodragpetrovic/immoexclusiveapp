import React from 'react'
import NavigationLink from './NavigationLink'
import { useTranslations } from 'next-intl'

const Button = () => {
  const t = useTranslations('HomePage');
  return (
    <NavigationLink href='/paketen' className='rounded-full border border-[#BEAD8E] hover:bg-[#BEAD8E] py-2 px-4'>
        {t('createAd')}
    </NavigationLink>
  )
}

export default Button