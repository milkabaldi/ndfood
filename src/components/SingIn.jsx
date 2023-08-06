import React, { useState, useEffect }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export default function SingIn() {
  return (
    <section className='p-20 fixed top-0 right-0 bg-secondary h-full hidden'>
      <div className='flex justify-between mb-10'>
        <span className='text-xl'>Вхід</span>
        <span className='flex gap-2'>Нема аккаунта?<Link href='#' className='text-dimLate hover:text-dimMoca transition-colors ease-in-out duration-300' >Зареєструватися</Link></span>
      </div>
        <form className='flex flex-col w-96 m-auto p-'>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ім'я</label>
            <input type="password" name="password" id="password" placeholder="Your Name" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша пошта</label>
            <input type="email" name="email" id="email" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            <div>
            <button type="submit" class="bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 text-secondary text-center">test one Реєстрація</button>
            </div>     
        </form>
    </section>
  )
}

