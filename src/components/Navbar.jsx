import React  from 'react'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'
import Image  from 'next/image'
import Link from 'next/link'

export const Navbar = ({data}) => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} flex flex-col`} >
        <div className='flex justify-between items-center gap-5 mb-10'>
          <Link href='/'>
            <Image src={images.NdLogo} alt='Logo' />
          </Link>
          <nav className='flex flex-row gap-5'>
            <a href="#dostavka">Доставка та оплата</a>
            <a href="#programa">Програма лояльності</a>
            <a href="#podarunkovi">Подарункові сертифікати</a>
            <a href="#kontakty">Контакти</a>
          </nav>
          <div className='relative'>
            <input className='block' type="text" placeholder='Пошук' />
            <Image className='absolute top-0 right-0' src={images.Search} alt='Logo' />
          </div>
          <div className='flex justify-between items-start'>
            <Image src={images.Account} alt='account' />
            <span className='block'>Увійти <Link href='#Link'>або</Link> Зареєструватися</span>
          </div>
        </div>
        <div className="menuSec text-black">
          <ul>
            {data.map((item)=>(
              <li key={item.id}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}



