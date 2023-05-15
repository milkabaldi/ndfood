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
          <li><a href='#'>Магазин NDfood</a></li>
          <li><a href='#'>Пн-Нед: 9:00 - 19:00</a></li>
          <li><a href='#'>Вінницька обл. м. Гайсин вул. 1 Травня 46 Г</a></li>
        </ul>     
      </div>
      <div className=''>
        <span>КАТЕГОРІЇ</span>
        <ul>
          <li><a>Алкогольні вироби</a></li>
          <li><a>Напої</a></li>
          <li><a>Снеки</a></li>
          <li><a>Гарячі напої</a></li>
          <li><a>Солодощі</a></li>
          <li><a>Бакалія</a></li>
          <li><a>М’ясні вироби</a></li>
          <li><a>Молочні вироби</a></li>
          <li><a>Вітаміни</a></li>
          <li><a>Побутова хімія</a></li>
          <li><a>Акції</a></li>
        </ul>
      </div>
      <div className=''>
        <span>ПОКУПЦЯМ</span>
        <ul>
          <li><a>Доставка та оплата</a></li>
          <li><a>Програма лояльності</a></li>
          <li><a>Подарункові сертифікати</a></li>
          <li><a>Контакти</a></li>
        </ul>
      </div>
      <div className=''>
        <p><a>+38 (096) 122 33 77</a></p>
        <span><a>Facebook</a></span>
        <span><a>Instagram</a></span>
        <span><a>Twitter</a></span>
      </div>

    </div>
    </section>
  )
}


