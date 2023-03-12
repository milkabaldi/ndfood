import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Homepage({data}) {
  return (
    <>
        <Navbar data={data} />
        <Footer />
    </>
  )
}
