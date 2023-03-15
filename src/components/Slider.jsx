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
    <section>
      <div className={`${styles.boxWidth} flex flex-col`}>
        <div className="banners">
          <div>
            <Image  src={images.bannerOne} />
          </div>
          <div>
            <Image  src={images.bannerTwo} />
          </div>
          <div>
            <Image  src={images.bannerThree} />
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
