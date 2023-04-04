import React , {createContext, useEffect, useState} from 'react'
import { Outlet } from "react-router-dom"
import Nav from '../../Components/NavC/Nav'

export const NewContext = createContext() 

function SharedLayout() {
  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"

  // Code of light and dark mode ..... 
  const [on, setOn] = useState(
    JSON.parse(localStorage.getItem('ligth_or_dark_mode')) === null ? false :  JSON.parse(localStorage.getItem('ligth_or_dark_mode'))
  )

  const [windowD, setWindowD] = useState({
    height: 0,
    width: 0
})
useEffect(() => {
    setWindowD(prev => ({
        height: window.innerHeight,
        width: window.innerWidth
    }))
}, [windowD.width, windowD.height])

console.log(windowD.height + "ne")

  
  
const dark_mode =    {
     
  "--boxShadowNav": "10px 10px 40px -28px rgb(159, 158, 158)", 
  "--navBackground": "rgb(7,10,18)", 
  "--bodyBackground": "rgb(8,12,23)", 
  "--navTextColor":"white",
  "--navTextHighlightColor":"rgb(159, 158, 158)", 
  "--btnbackground":"rgb(26,36,65)", 
  "--navShadow": " 10px 10px 40px -28px white",
  "--navItemLineColor": " rgb(205, 203, 203)",
  "--toggle_dark_light_mode_P_background":"rgb(26,36,65)",
  "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
  "--toggle_dark_light_mode_P_border":"rgb(26,36,65)",
  "--contact_background": "rgb(7,10,18)",              
  "--project_link_btn_background":"rgb(26,36,65)",
   "--project_link_btn_color": "white",
  "--project_single_background_Shadow":"10px 10px 20px -20px whitesmoke",
   "--project_single_background": "rgb(7,10,18)",
   "--single_skill_background":"rgb(17,20,39)",
   "--single_skill_shadow":"10px 10px 20px rgba(0, 0, 0, 0.25)",
}

const light_mode = 
{
  "--boxShadowNav": "10px 10px 40px -20px rgba(0, 0, 0, 0.25)", 
  "--navBackground": "white", 
  "--bodyBackground": "white", 
  "--navTextColor":"black",
  "--navTextHighlightColor":"rgb(159, 158, 158)", 
  "--btnbackground":" rgb(222, 221, 221)", 
  "--navShadow": " 10px 10px 20px -10px rgba(0, 0, 0, 0.25)",
  "--navItemLineColor": " rgb(205, 203, 203)",
  "--toggle_dark_light_mode_P_background":" rgb(244, 244, 244)",
  "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
  "--toggle_dark_light_mode_P_border":" rgb(243, 243, 243)",
  "--contact_background": " rgb(250, 250, 250)",              
  "--project_link_btn_background":" rgb(85, 83, 83)",
   "--project_link_btn_color": "white",
  "--project_single_background_Shadow":"10px 10px 20px 5px rgba(0, 0, 0, 0.25)",
   "--project_single_background": "white",
   "--single_skill_background":"aliceblue",
   "--single_skill_shadow":"10px 10px 20px rgba(0, 0, 0, 0.25)",
 }



  const [color_mode, setColor_mode] = useState(
    dark_mode
  )

// Code of light and dark mode ..... 
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('ligth_or_dark_mode'))
    if (local === null) {
      localStorage.setItem("ligth_or_dark_mode", JSON.stringify(on))
    } else {
      if(local === true) setColor_mode(dark_mode)
      if(local === false) setColor_mode(light_mode)
    }
  }, [on])



  // useEffect(() => { 
  //   const local = JSON.parse(localStorage.getItem('one'))
  //   if (local === null) {
  //     console.log("Hello")
  //     setColor_mode(dark_mode)
  //   } else {
  //     if(local === true) setColor_mode(dark_mode)
  //     if(local === false) setColor_mode(light_mode)
  //   }
  // }, [on])
  






  /*
  







  Light_mode ....... 


    {
      "--boxShadowNav": "10px 10px 40px -20px rgba(0, 0, 0, 0.25)", 
      "--navBackground": "white", 
      "--navTextColor":"black",
      "--navTextHighlightColor":"rgb(159, 158, 158)", 
      "--btnbackground":" rgb(222, 221, 221)", 
      "--navShadow": " 10px 10px 20px -10px rgba(0, 0, 0, 0.25)",
      "--navItemLineColor": " rgb(205, 203, 203)",
      "--toggle_dark_light_mode_P_background":" rgb(244, 244, 244)",
      "--toggle_dark_light_mode_C_background":"rgb(155, 154, 154)",
      "--toggle_dark_light_mode_P_border":" rgb(243, 243, 243)",
      "--contact_background": " rgb(250, 250, 250)",              
      "--project_link_btn_background":" rgb(85, 83, 83)",
       "--project_link_btn_color": "white",
      "--project_single_background_Shadow":"10px 10px 20px 5px rgba(0, 0, 0, 0.25)",
       "--project_single_background": "white",
       "--single_skill_background":"aliceblue",
       "--single_skill_shadow":"10px 10px 20px rgba(0, 0, 0, 0.25)",
     }
  
  */

  return (
      <>
         <NewContext.Provider value={{on,setOn, color_mode , windowD}}>
          <Nav />
          <section>
              <Outlet/>
              </section>
              </NewContext.Provider>
    </>
  )
}

export default SharedLayout