import React, { useContext } from 'react'
import Nav from '../NavC/Nav'
import "./Home.css"

import { NavLink } from "react-router-dom"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'


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


  const context = useContext(NewContext)

  console.log(context.color_mode)
  console.log(context.color_mode["--navTextColor"])
  console.log(context.color_mode["--navTextHighlightColor"])
  return (
    <>
      
      <section className="home_parent"
        style={{
          "--bodyHeight": `${context.windowD.height}px`, 
        ...context.color_mode
      }}
      >
        
   
      <section className="home"
        style={{
          "--bodyHeight": `${context.windowD.height}px`, 
        ...context.color_mode
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
                specialized in the front end . I'm fluent in  English language ,  a good team player and I'm also able to work under pressure. 

                </li>
                <li className="git_ln">
                 <a href="https://www.github.com/Afuh-Christian/" target="_blank">  <BsGithub/> </a>
                 <a href="https://www.linkedin.com/mwlite/in/afuh-christian-forkoum-375816243/" target="_blank">   <BsLinkedin /> </a>
                  
                
                  {/* <img src="Image/github.svg" alt="" /> */} 
                  {/* <img src="Image/filled.svg" alt="" /> */}
                </li>
              </ul>
            </li>
              <li className="profile">
               
                  <img src="Image/afuh_home.svg" alt="" />
                 
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
        
        </section>
    </>
  )
}

export default Home