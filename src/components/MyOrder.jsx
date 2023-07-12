import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export default function MyOrder() {
  return (
    <div className='pt-14 pb-20'>
        <div className='container'>
            <div className=''>
                    <span>Заказ</span>
                    <span>Товари</span>
                    <span>Сума</span>
                    <span>Статус</span>
            </div>
            <div className='flex'>
              <div>Номер заказа</div>
              <div>Товари</div>
              <div>Сума</div>
              <div>Статус</div>
            </div>
        </div>
    </div>
  )
}
