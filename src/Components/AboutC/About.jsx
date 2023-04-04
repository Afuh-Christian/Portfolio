import React , {useContext, useEffect} from 'react'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'

import "./About.css"



function About() {

  const context = useContext(NewContext)

  return (
    <>
      <section className="about"
        style={{
          "--bodyHeight": `${context.windowD.height}px`, 
          ...context.color_mode
      }}
      >
        asdfasdfads {context.on && "On" || "Off"}
        <button onClick={() => { context.setOn(!context.on) }}>{context.on && "On" || "Off"}</button>
      </section>  
    </>
)
}

export default About