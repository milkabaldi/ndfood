import React, { useState, useEffect }  from 'react'
import {LogIn}  from '@/components/LogIn'
import MyOrder from '@/components/MyOrder'
import PasswordReset from '@/components/PasswordReset'

const Profile = () => {



  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabTitle = () => {
    if (activeTab === 'login') {
      return 'Особисті дані';
    } else if (activeTab === 'passwordReset') {
      return 'Змінити пароль';
    } else if (activeTab === 'myOrder') {
      return 'Мої замовлення';
    }
    return '';
  };
  
  useEffect(() => {
    document.title = getTabTitle();
  }, [activeTab]);

  return (
    <>
    <div>
            <h1 className='text-primary text-center mb-8 text-7xl font-semibold	'>{getTabTitle()}</h1>
        </div>
            <ul className='flex gap-x-16 items-center justify-center mb-10'>
                <li><button onClick={() => handleTabClick('login')}>Особисті дані</button>
        </li>
        <li><button onClick={() => handleTabClick('myOrder')}>Мої замовлення</button></li>
                <li><button onClick={() => handleTabClick('passwordReset')}>Змінити пароль</button></li>
                
            </ul>
      {activeTab === 'login' && <LogIn />}
      {activeTab === 'passwordReset' && <PasswordReset />}
      {activeTab === 'myOrder' && <MyOrder />}
    </>
  );
};


export default Profile
