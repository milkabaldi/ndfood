import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export default function MyOrder() {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `} >
            <div className='flex items-center justify-between border-b-4 pb-5'>
                    <span>Заказ</span>
                    <span>Товари</span>
                    <span>Сума</span>
                    <span>Статус</span>
            </div>
            <div className='flex  justify-between border-b-4 pt-6 pb-5'>
              <div>
                <div>№312415</div>
                <div>04.01.2023</div>
              </div>
              <div>
                <Image alt='Товар' src={images.Sweets} width={60}/>
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
            <div className='flex  justify-between border-b-4 pt-6 pb-5'>
              <div>
                <div>№521242</div>
                <div>14.05.2023</div>
              </div>
              <div className='flex gap-5'>
                <Image alt='Товар' src={images.Sweets} width={60}/>
                <Image alt='Товар' src={images.Sweets} width={60}/>
              </div>
              <div>
                <div>5400 ₴</div> 
              </div>
              <div>
                <ul>
                  <li><span>
                  Очікує оплати
                </span></li>
                  </ul>
              </div>
            </div>

        </div>
    </section>
  )
}
