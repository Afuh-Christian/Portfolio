import "./Nav.css"
import React from 'react'

import {NavLink} from "react-router-dom"

function Nav() {

  const TextStyle = ({ isActive }) => {
    let result = !isActive ? { textDecoration: "none", color: "black" } : {textDecoration: "none", color: "rgb(159, 158, 158)" }
    return result
  }
  return (
  
      <section className="nav">
          <ul>
        <li> <NavLink style={TextStyle} to="/">Home</NavLink></li>
        <li> <NavLink style={TextStyle} to="/project">Projects</NavLink></li>
        <li> <NavLink style={TextStyle}  to="/about">About Me</NavLink></li>
        <li> <NavLink style={TextStyle} to="/contact">Contact</NavLink></li>
        <li> <NavLink style={TextStyle} to="/skill">Skills</NavLink></li>
        </ul>
      </section>
      
  )
}

export default Nav