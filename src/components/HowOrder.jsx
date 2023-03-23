import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const HowOrder = ({ mods }) => {
  return (
    <section className='hello'>
      <div>
      {mods && mods.map((mod) => (
        <div>
          <span key={mod.title}>{mod.title}</span>
          <p key={mod.txt}>{mod.txt}</p>
          <Image src={mod.img} alt="background image" />
        </div>

))}
      </div>

    </section>
  )
}

export async function getStaticProps() {
  const {how_order} = await import('/data/data.json');
  console.log(how_order)
  return{
    props: {
      data: { mods:how_order},
    }
  }
}