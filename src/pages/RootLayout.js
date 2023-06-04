import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavingation from '../components/MainNavigation'


const RootLayout = () => {
  return (
    <>
    <MainNavingation/>
    <main>

    <Outlet/>

    </main>
    </>
  )
}

export default RootLayout