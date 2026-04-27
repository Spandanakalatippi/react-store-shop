import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Component/LandingPage'
import Navbar from './Component/Navbar'
import Products from './Component/Pages/Products'
import AddtoCart from './Component/Pages/AddtoCart'
import AddProducts from './Component/Pages/AddProducts'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={< Products />} path='/products' />
          <Route element={< AddtoCart />} path='/cartitemss' />
          <Route element={<  AddProducts />} path='/addproducts' />

        </Routes>


      </div>
    </>
  )
}

export default App