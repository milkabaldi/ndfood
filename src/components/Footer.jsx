import React from 'react'

export const Footer = ({title}) => {
  return (
    <div>{title}</div>
  )
}


export async function getServerSideProps() {
  return {
    props: {
      title: "Hello my name footer",
    }, 
  }
}