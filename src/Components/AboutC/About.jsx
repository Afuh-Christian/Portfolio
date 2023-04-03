import React , {useContext} from 'react'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'

import "./About.css"



function About() {

  const context = useContext(NewContext)
 console.log(context.color_mode["--bodyHeight"] + "tooooadadfa")
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