import React  from 'react'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'
import Image  from 'next/image'
import Link from 'next/link'
import data from '../../data/data.json'

export const Navbar = () => {
  return (
    <header className={`${styles.paddingY} ${styles.paddingX} bg-secondary`}>
      <div className={`${styles.boxWidth} flex flex-col`} >
        <div className='flex justify-between items-center gap-5 mb-10'>
          <Link href='/'>
            <Image src={images.NdLogo} alt='Logo' />
          </Link>
          <nav className='flex flex-row gap-5'>
            <a className='text-dimGrey hover:text-dimMoca transition-colors ease-in-out duration-300' href="#dostavka">Доставка та оплата</a>
            <a className='text-dimGrey hover:text-dimMoca transition-colors ease-in-out duration-300' href="#programa">Програма лояльності</a>
            <a className='text-dimGrey hover:text-dimMoca transition-colors ease-in-out duration-300' href="#podarunkovi">Подарункові сертифікати</a>
            <a className='text-dimGrey hover:text-dimMoca transition-colors ease-in-out duration-300' href="#kontakty">Контакти</a>
          </nav>
          <div className='relative'>
            <input className='block' type="text" placeholder='Пошук' />
            <Image className='absolute top-0 right-0' src={images.Search} alt='Logo' />
          </div>
          <div className='flex justify-between items-end gap-1'>
            <Image src={images.Account} alt='account' />
            <span className='block text-dimGrey text-base '>Увійти <Link to='/registration' href='/profile' className='text-dimLate hover:text-dimMoca transition-colors ease-in-out duration-300'>або</Link> Зареєструватися</span>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className='flex gap-5 items-center '>
            {data.menu.map((item)=>(
              <li key={item.id}><a className='text-base text-dimGrey hover:text-dimMoca transition-colors ease-in-out duration-300' href={item.link}>{item.name}</a></li>
            ))}
          </ul>
          <button className='bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 flex justify-between gap-2 items-center'>
            <Image src={images.Cart} alt='cart'/>
            <span className='block'>5 товара - ₴ 2,700</span>
          </button>
        </div>
      </div>
    </header>
  )
}



