import Head from 'next/head'

import { Inter } from 'next/font/google'
import Homepage from './home/homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>NdFood</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage data={data} />
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const {menu} = await import ('/data/data.json')
  return {
    props: {
      data: menu,
    }, 
  }
}