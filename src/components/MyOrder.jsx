import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export default function MyOrder() {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `} >
            <div className=''>
                    <span>Заказ</span>
                    <span>Товари</span>
                    <span>Сума</span>
                    <span>Статус</span>
            </div>
            <div className='flex'>
              <div>
                <div>№312415</div>
                <div>04.01.2023</div>
              </div>
              <div>
                <Image alt='Товар' src={images.Sweets} />
              </div>
              <div>
                <div>2500 ₴</div> 
              </div>
              <div>
                <ul>
                  <li><span>
                  Відправлено
                </span></li>
                  </ul>
              </div>
            </div>
        </div>
    </section>
  )
}
