import "./Nav.css"
import React, { useContext, useState } from 'react'

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






  
  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"

  const TextStyle = ({ isActive }) => {
    let result = !isActive ? { textDecoration: "none", color: navTextColor } : {textDecoration: "none", color: navTextHighlightColor }
    return result
  }

  const context = useContext(NewContext)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

// Nav bar responsive 
 function ShowBar(){
  setShow(!show)
}

  const gotoHome = async () => {
    await  ShowBar();
    await navigate("/")
  }

  return (
  <>
    <section className="nav"
      style={{
        "--boxShadowNav": "10px 10px 40px -20px rgba(0, 0, 0, 0.25)", 
        "--navBackground": "white", 
        "--navTextColor":navTextColor,
        "--navTextHighlightColor":"",
        "--navShadow": " 10px 10px 20px -10px rgba(0, 0, 0, 0.25)",
        "--navItemLineColor": " rgb(205, 203, 203)",
        "--toggle_dark_light_mode_P_background":" rgb(244, 244, 244)",
        "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
        "--toggle_dark_light_mode_P_border":" rgb(243, 243, 243)",
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
                () => { context.setOn(!context.on) }
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
            "--boxShadowNav": "10px 10px 40px -20px rgba(0, 0, 0, 0.25)", 
          "--navBackground": "white", 
          "--navShadow": " 10px 10px 20px -10px rgba(0, 0, 0, 0.25)",
          "--navItemLineColor": " rgb(205, 203, 203)",
          "--toggle_dark_light_mode_P_background":" rgb(244, 244, 244)",
          "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
          "--toggle_dark_light_mode_P_border":" rgb(243, 243, 243)",
            
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