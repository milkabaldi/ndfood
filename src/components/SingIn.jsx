import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/data.json';
import styles from '/src/styles/styles.js';
import images from '/src/constants/images';

export default function SignIn() {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <section className='p-20 fixed top-0 right-0 bg-secondary h-full'>
      <div className='flex justify-between mb-10'>
        <span className='text-xl'>Вхід</span>
        <span className='flex gap-2'>
          {showRegistration ? (
            <Link href='#' className='text-dimLate hover:text-dimMoca transition-colors ease-in-out duration-300' onClick={toggleRegistration}>Увійти</Link>
          ) : (
            <Link href='#' className='text-dimLate hover:text-dimMoca transition-colors ease-in-out duration-300' onClick={toggleRegistration}>Зареєструватися</Link>
          )}
        </span>
      </div>
      {showRegistration && (
       <form className='flex flex-col w-96 m-auto p-'>
       <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ім'я</label>
       <input type="text" name="name" id="name" placeholder="Your Name" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша пошта</label>
       <input type="email" name="email" id="email" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
       <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
       <input type="password" name="password" id="password" placeholder="••••••••" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
       <div>
         <button type="submit" className="bg-dimLate hover:bg-dimMoca transition-colors ease-in-out duration-300 py-5 px-9 text-secondary text-center">Реєстрація</button>
       </div>
     </form>
      )}
    </section>
  );
}