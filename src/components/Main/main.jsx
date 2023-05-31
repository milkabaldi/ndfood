import React from 'react'
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'
import Image from 'next/image'
import Link from 'next/link'

export const Main = () => {
  return (
    <main>
       <section className={`${styles.paddingY} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`} >
        Main SSR for page ID just another test
        </div>
      </section>
    </main>
  )
}
