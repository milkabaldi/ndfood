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
        <Image />        
        <ul>
          <li>Магазин</li>
          <li>Пн-Нед: 9:00 - 19:00</li>
          <li>Вінницька обл. м. Гайсин вул. 1 Травня 46 Г</li>
        </ul>     
      </div>
      <div className=''>
        <span>КАТЕГОРІЇ</span>
        <ul>
          <li>Алкогольні вироби</li>
          <li>Напої</li>
          <li>Снеки</li>
          <li>Гарячі напої</li>
          <li>Солодощі</li>
          <li>Бакалія</li>
          <li>М’ясні вироби</li>
          <li>Молочні вироби</li>
          <li>Вітаміни</li>
          <li>Побутова хімія</li>
          <li>Акції</li>
        </ul>
      </div>
      <div className=''>
        <span>ПОКУПЦЯМ</span>
        <ul>
          <li>Доставка та оплата</li>
          <li>Програма лояльності</li>
          <li>Подарункові сертифікати</li>
          <li>Контакти</li>
        </ul>
      </div>
      <div className=''>
        <p>+38 (096) 122 33 77</p>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>

    </div>
    </section>
  )
}


