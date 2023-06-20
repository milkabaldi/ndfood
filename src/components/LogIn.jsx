import React from 'react'
import Image from 'next/image'
import data from '../../data/data.json';
import styles from '/src/styles/styles.js'
import images from '/src/constants/images'


export const LogIn = () => {
    return (
    <div className='pt-14 pb-20'>
        <div>
            <h1 className='text-primary text-center mb-8 text-7xl font-semibold	'>Особистий кабінет</h1>
        </div>
            <ul className='flex gap-x-16 items-center justify-center mb-10'>
                <li><a href="£">Особисті дані</a></li>
                <li><a href="£">Мої замовлення</a></li>
                <li><a href="£">Змінити пароль</a></li>
            </ul>
        <form className='flex flex-col w-96 m-auto p-'>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            <div>
            <button type="submit" class="bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 text-secondary text-center">ЗБЕРЕГТИ</button>
            <button type="submit" class="bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 text-secondary text-center">Вийти</button>
            </div>
            
        </form>

    </div>
  )
}
