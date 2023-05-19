import React  from 'react'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'
import Image  from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} bg-secondary`}>
      <div className={`${styles.boxWidth} grid grid-cols-4 gap-4`} >
      <div>
        <Image src={images.NdLogo} />        
        <ul>
          <li><Link href='#'>Магазин NDfood</Link></li>
          <li><Link href='#'>Пн-Нед: 9:00 - 19:00</Link></li>
          <li><Link href='#'>Вінницька обл. м. Гайсин вул. 1 Травня 46 Г</Link></li>
        </ul>     
      </div>
      <div className=''>
        <span>КАТЕГОРІЇ</span>
        <ul>
          <li><Link href='/'>Алкогольні вироби</Link></li>
          <li><Link href='/'>Напої</Link></li>
          <li><Link href='/food'>Снеки</Link></li>
          <li><Link href='/food'>Гарячі напої</Link></li>
          <li><Link href='/food'>Солодощі</Link></li>
          <li><Link href='/food'>Бакалія</Link></li>
          <li><Link href='/food'>М’ясні вироби</Link></li>
          <li><Link href='/'>Молочні вироби</Link></li>
          <li><Link href='/'>Вітаміни</Link></li>
          <li><Link href='/'>Побутова хімія</Link></li>
          <li><Link href='/'>Акції</Link></li>
        </ul>
      </div>
      <div className=''>
        <span>ПОКУПЦЯМ</span>
        <ul>
          <li><Link href='/buyer'>Доставка та оплата</Link></li>
          <li><Link href='/buyer'>Програма лояльності</Link></li>
          <li><Link href='/buyer'>Подарункові сертифікати</Link></li>
          <li><Link href='/buyer'>Контакти</Link></li>
        </ul>
      </div>
      <div className=''>
        <p><Link href='phone:380961223377'>+38 (096) 122 33 77</Link></p>
        <span><Link href='Facebook.com'>Facebook</Link></span>
        <span><Link href='Instagram.com'>Instagram</Link></span>
        <span><Link href='Twitter.com'>Twitter</Link></span>
      </div>

    </div>
    </section>
  )
}


