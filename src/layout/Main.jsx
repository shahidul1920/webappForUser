import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../comp/Header'
import { Footer } from '../comp/Footer'

export const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
