import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Slider } from '@/components/Slider'

export default function Homepage({data}) {
  return (
    <>
        <Navbar data={data} />
        <Slider data={data} />
        <Footer />
    </>
  )
}
