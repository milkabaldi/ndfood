import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Slider } from '@/components/Slider'
import { HowOrder } from '@/components/HowOrder'

export default function Homepage({data}) {
  return (
    <>
        <Navbar data={data} />
        <Slider />
        <HowOrder />
        <Footer />
    </>
  )
}
