import React from 'react'
import {LogIn}  from '@/components/LogIn'
import SingIn from '@/components/SingIn'
import PasswordReset from '@/components/PasswordReset'

const Profile = () => {
  return (
    <>
      <LogIn />
      <PasswordReset />
      <SingIn />
    </>
  )
}

export default Profile
