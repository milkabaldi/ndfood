import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const HowOrder = ({ data }) => {
  return (
    <section className='hello'>
      <div>
      {data && data.map((itme) => (
        <div>
          <span key={item.title}>{item.title}</span>
          <p key={item.txt}>{item.txt}</p>
          <Image src={item.img} alt="background image" />
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
      data: how_order,
    }
  }
}