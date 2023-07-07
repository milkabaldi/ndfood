import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'

const Checkout = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} bg-secondary`}>
      <div className={`${styles.boxWidth} `}>
        <h1>Checkout</h1>
        <div className=''>
          <h2>Спосіб доставки</h2>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />

        </div>
        <div>
          <h2>Ваше замовлення</h2>
          <label htmlFor="">Товар</label>
         <img src="" alt="" />
          <label htmlFor="">Ціна</label>
         
          <label htmlFor="">Досставка</label>
         
        </div>
      </div>
    </section>
  )
}

export default Checkout
