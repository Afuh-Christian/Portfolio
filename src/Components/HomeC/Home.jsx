import React from 'react'
import Nav from '../NavC/Nav'
import "./Home.css"

import { NavLink } from "react-router-dom"
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const pics = [
  "Image/html.svg",
  "Image/css.svg",
  "Image/js.svg",
  "Image/ts.svg",
  "Image/reactjs.svg",
  "Image/angular.svg",
  "Image/nextjs.svg",
  "Image/node.svg",
  "Image/expressjs.svg",
  "Image/git.svg",
  "Image/docker.svg",
  "Image/figma.svg",
]


function Home() {
  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"
  return (
    <>
      
  
      <section className="home"
        style={{
        
      "--boxShadowNav": "10px 10px 40px -20px rgba(0, 0, 0, 0.25)", 
      "--navBackground": "white", 
      "--navTextColor":navTextColor,
      "--navTextHighlightColor": navTextHighlightColor, 
      "--btnbackground":" rgb(222, 221, 221)", 
      "--navShadow": " 10px 10px 20px -10px rgba(0, 0, 0, 0.25)",
      "--navItemLineColor": " rgb(205, 203, 203)",
      "--toggle_dark_light_mode_P_background":" rgb(244, 244, 244)",
      "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
      "--toggle_dark_light_mode_P_border":" rgb(243, 243, 243)",
      }}
      >




        <section className="home1">
          <ul>
            <li>
              <ul>
                <li className="h1">FRONT END DEVELOPER 
                    WEB/MOBILE</li>
                
                <li className="txt">
                My name is  <span>Afuh Christian</span> I’m a software developer 
                specialized in the front end . I'm fluent in  English language ,  good at working with teams and I can go solo when required. 

                </li>
                <li className="git_ln">
                  <BsGithub/>
                  <BsLinkedin />
                
                  {/* <img src="Image/github.svg" alt="" /> */} 
                  {/* <img src="Image/filled.svg" alt="" /> */}
                </li>
              </ul>
            </li>
           <li className="profile">
            <img src="Image/github.svg" alt=""/>
           </li>
          </ul>
        </section>
        <section className="home2">
       <ul>
        <li className="h1">My Regular tech tools</li>
        <li>
          <ul>
                { pics.map(e => <li><img src={e} alt="" /></li> )}
           
          </ul>
        </li>
        <li>
            <NavLink className="NavLink" to={"/skill"}>   more tools</NavLink>
        </li>
       </ul>
        </section>
      




    </section>
    </>
  )
}

export default Home