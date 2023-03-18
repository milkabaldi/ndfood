import React from 'react'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'
import Image from 'next/image'
import Link from 'next/link'

export function Slider() {
  function handleClick() {
    console.log('increment like count')
  }

  return (
    <section className='pt-8'>
      <div className={`${styles.boxWidth} flex flex-col`}>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className='row-span-3 '>
            <Link href="#banner">
            <Image  src={images.bannerOne} />
            </Link>
            
          </div>
          <div className='col-span-3 '>
            <Link href="#banner">
            <Image  src={images.bannerTwo} />
            </Link>
            
          </div>
          <div className='row-span-2 col-span-2 '>
            <Link href="#banner">
            <Image  src={images.bannerThree} />
            </Link>
            
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleClick} className="bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 flex justify-between gap-2 items-center">
            Like
          </button>
        </div>
      </div>
    </section>
  )
}
