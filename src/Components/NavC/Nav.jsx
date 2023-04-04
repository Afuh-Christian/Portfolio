import "./Nav.css"
import React, { useContext, useEffect, useState } from 'react'

import {NavLink, useNavigate} from "react-router-dom"
import { NewContext } from "../../Pages/SharedLayout/SharedLayout"
import { BsFillBrightnessHighFill } from "react-icons/bs"
import { FaMoon , FaHome} from "react-icons/fa"
import { GoProject } from "react-icons/go"
import { FcAbout } from "react-icons/fc"
import { MdContactPhone , MdClose } from "react-icons/md"
import { GiSkills } from "react-icons/gi"
import { FiMenu  } from "react-icons/fi"

function Nav() {


  const context = useContext(NewContext)



  
  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"

  const TextStyle = ({ isActive }) => {
    let result = !isActive ? { textDecoration: "none", color: context.color_mode["--navTextColor"] } : {textDecoration: "none", color: context.color_mode["--navTextHighlightColor"] }
    return result
  }


  const [show, setShow] = useState(false)
  const navigate = useNavigate()

// Nav bar responsive 
 function ShowBar(){
   setShow(!show)
}

  return (
  <>
    <section className="nav"
        style={{
          ...context.color_mode
      }}
      
      
    >
      <ul>
        <li className="navlist">
        <ul>
        <li> <NavLink style={TextStyle} to="/"> Home </NavLink></li>
        <li> <NavLink style={TextStyle} to="/project">Projects </NavLink></li>
        <li> <NavLink style={TextStyle}  to="/about">About Me</NavLink></li>
        <li> <NavLink style={TextStyle} to="/contact">Contact</NavLink></li>
        <li> <NavLink style={TextStyle} to="/skill">Skills</NavLink></li>
        </ul>
        </li>
          <li className="hamberger"
          onClick={ShowBar}
          > {!show ? <FiMenu /> : <MdClose />} 
         
          </li>
        <li className="light_dark">
          <div className="l_p">
        
            <div className="c"
              onClick={
                () => {
                  localStorage.setItem('ligth_or_dark_mode', JSON.stringify(!context.on))
                  context.setOn(!context.on)
                }
            }
              style={{transform: context.on? "translateX(66%)" : "translateX(0%)" , transitionDuration: "0.6s"}}
            >
              {!context.on ? <BsFillBrightnessHighFill /> : <FaMoon/>}

            </div>
          </div>
        </li>
      </ul>
      </section>
      <div className="mobileNav" style={
        {
          ...context.color_mode, 
            
          transform: !show ? "translateX(-400px)" : "translateX(0px)",
          transitionDuration: "0.7s",

          
        }
      }>
      <ul >
        <li> <NavLink style={TextStyle} onClick={ShowBar} to="/"> Home  <FaHome/> </NavLink></li>
        <li> <NavLink style={TextStyle} onClick={ShowBar} to="/project">Projects <GoProject/> </NavLink></li>
        <li> <NavLink style={TextStyle} onClick={ShowBar}  to="/about">About Me <FcAbout color="black"/></NavLink></li>
        <li> <NavLink style={TextStyle} onClick={ShowBar} to="/contact">Contact   <MdContactPhone/>  </NavLink></li>
        <li> <NavLink style={TextStyle} onClick={ShowBar} to="/skill">Skills  <GiSkills/></NavLink></li>
        </ul>
        </div>
    
      </>
  )
}

export default Nav