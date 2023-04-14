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

        
        <section className="aboutin">
         <ul className="intro">
          <li>
            <ul>
              <li>
                <div className='h1'>Name</div>
                <div>Afuh Christian Forkoum</div>
              </li>
              <li>
                <div className='h1'>Origin</div>
                  <div>I  was born I Cameroon in the city of Bamenda . I started my coding journey in
                    2019 and have been aiming for perfection ever since . </div>
              </li>
            </ul>
            </li>
            <li className="img">
              <img src="Image/afuh_about.svg" alt="" />
            </li>
          </ul>
          

          <ul className="intro2">
            <li>
              <div className="h1">Projects and learning path</div>
              <div>
              I have built a couple projects over the years as you can see on the Projects page. Some of these projects were profit oriented while others where to solve real life problems faced by my fellow Cameroonians and possibly other people around the world  . Doing these projects made me to learn every thing that happens around us is indeed in our control. 
              </div>
            </li>
            <li>
              <div className="h1">Personality</div>
              <div>
              I am very ambitious in my work and I strive hard to complete my projects on time . I am very open to learning more skills along the way . 
              </div>
            </li>
          </ul>
        </section>

          

        
      </section>  
    </>
)
}

export default About