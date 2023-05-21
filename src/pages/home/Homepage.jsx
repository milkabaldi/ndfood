import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Slider } from '@/components/Slider'
import { HowOrder } from '@/components/HowOrder'
import {CustomSlider} from '@/components/Slider'

export default function Homepage({data}) {
  return (
    <>
        <Navbar data={data} />
        <CustomSlider />
        <Slider />
        <CustomSlider />
        <HowOrder />
        <Footer />
    </>
  )
}
