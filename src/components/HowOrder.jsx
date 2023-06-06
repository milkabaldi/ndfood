import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export const HowOrder = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `} >
        <h1 className='text-3xl text-center mb-10'>Як оформити замовлення?</h1>
        <div className='grid grid-cols-4 gap-4'>
        {data.howOrder.map((item) => (
          <div key={item.title} className='p-8 bg-white rounded-xl  shadow-lg shadow-black-500/50'>
            <span className='text-2xl mb-4 block'>{item.title}</span>
            <p className='text-lg'>{item.txt}</p>
            <Image src={item.img} alt="background image" width={100} height={100}/>
          </div>
        ))}
        </div>
       
      </div>
    </section>
  )
}