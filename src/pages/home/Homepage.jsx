import React from 'react'
import { Slider } from '@/components/Slider'
import { HowOrder } from '@/components/HowOrder'
import { CustomSlider } from '@/components/CustomSlider'

export default function Homepage({ data }) {
  return (
    <>
      <Slider />
      <HowOrder />
      <CustomSlider slides={data.banners} />
    </>
  )
}
