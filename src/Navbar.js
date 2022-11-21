import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
function Navbar(){
    return (
        <>
        <div className='dnav'>
            <NavLink className={"nav"} to="/Mainpage">Home</NavLink>
            <NavLink className={"nav"} to="/Bollywood">Bollywood</NavLink>
            <NavLink className={"nav"} to="/Technology">Technology</NavLink>
            <NavLink className={"nav"} to='/Hollywood'>Hollywood</NavLink>
            <NavLink className={"nav"} to="/Fitness">Fitness</NavLink>
            <NavLink className={"nav"} to="/Food">Food</NavLink>
        </div>
        </>
    )}
  export default Navbar;