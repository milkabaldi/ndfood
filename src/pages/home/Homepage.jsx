import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Slider } from '@/components/Slider'
import { HowOrder } from '@/components/HowOrder'
import {Main} from '@/components/Main/main'
import {CustomSlider} from '@/components/CustomSlider'


export default function Homepage({ data }) {
  return (
    <>
      <Navbar data={data} />
      <Slider />
      <Main />
      <HowOrder />
      <CustomSlider slides={data.banners} />
      <Footer />
    </>
  )
}
