import React, { useContext } from 'react'
import Nav from '../NavC/Nav'
import "./Contact.css"
import { FaPhone } from 'react-icons/fa'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'

function Contact() {
  const context = useContext(NewContext)

  return (
    <>
    
      <section className="contact_parent"
      style={{
          "--bodyHeight": `${context.windowD.height}px`, 
            ...context.color_mode
          }}>
    
      <section className="contact"
        style={{
          "--bodyHeight": `${context.windowD.height}px`, 
            ...context.color_mode
          }}
      >
        
      <ul>
          <li className="h1">
          <div>
              Contact Me
              </div>
          </li>
          <li>
            <ul>
              <li>
                <ul>
                  <li className="txt"> <div> Email</div></li>
                  <li className='ima'>
                  <img src="Image/gmail.svg" alt=""/>                    
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="txt"> <div className='call'>
                    Direct Call
                    <FaPhone className='faphone' />
                  {/* <img src="Image/phone.svg" alt=""/>   */}
                  </div></li>
                  <li>
                    <ul>
                      <li>+237 671 018 950</li>
                      <li>+237 695 558 274</li>
                      <li>+237 243 413 995</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
              <ul>
                  <li className="txt"> <div> Social Media</div></li>
                  <li className='ima'>
                    <div >
                  <img src="Image/whatsapp.svg" alt=""/>                    
                  <img src="Image/facebook.svg" alt=""/>                    
                  </div>
                  </li>
                </ul>
              </li>
            </ul>
        </li>
      </ul>
        
    </section>
    </section>
      </>
  )
}

export default Contact