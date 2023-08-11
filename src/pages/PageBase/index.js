import React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function PageBase() {
  return (
    <main>
        <BrowserRouter>
        <Outlet/>
        </BrowserRouter>
    </main>
  )
}
