import React , {useContext} from 'react'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'

import "./About.css"



function About() {

  const context = useContext(NewContext)

  return (
    <>
      <section className="about" style={{backgroundColor:"yellow"}}>
        asdfasdfads {context.on && "On" || "Off"}
        <button onClick={() => { context.setOn(!context.on) }}>{context.on && "On" || "Off"}</button>
      </section>  
    </>
)
}

export default About