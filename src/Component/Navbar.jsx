import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li><NavLink to='/'>HOME</NavLink></li>
          <li><NavLink to='/products'>Products</NavLink></li>
          <li><NavLink to='/cartitemss'>AddtoCart</NavLink></li>
          <li><NavLink to='/addproducts'>AddProducts</NavLink></li>



        </ul>
      </div>
    </>
  )
}

export default Navbar