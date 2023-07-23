import React from 'react'
import { Slider } from '@/components/Slider'
import { HowOrder } from '@/components/HowOrder'
import { CustomSlider } from '@/components/CustomSlider'
import SingIn from '@/components/SingIn'

export default function Homepage({ data }) {
  return (
    <>
      <Slider />
      <HowOrder />
      <CustomSlider slides={data.banners} />
      <SingIn />
    </>
  )
}
