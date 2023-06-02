import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import images from '/src/constants/images'


export const HowOrder = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `} >
        {data.howOrder.map((item) => (
          <div key={item.title}>
            <span>{item.title}</span>
            <p>{item.txt}</p>
            <Image src={item.img} alt="background image" width={100} height={100}/>
          </div>
        ))}
      </div>
    </section>
  )
}