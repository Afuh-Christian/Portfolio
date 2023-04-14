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
                 <a href="https://afuhchristian10@gmail.com" target="_blank">  <img src="Image/gmail.svg" alt=""/>  </a>                    
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
                 {/* <a href="https://wa.me/qr/DHNPHYO4JBXED1/">  <img src="Image/whatsapp.svg" alt=""/>  </a>                    */}
                 <a href="https://wa.link/bdlq8r" target="_blank">  <img src="Image/whatsapp.svg" alt=""/>  </a>                   
                 <a href="https://www.facebook.com/afuhchristian.forkoum"> <img src="Image/facebook.svg" alt=""/>   </a>                 
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