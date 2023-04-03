import React from 'react'
import Nav from '../NavC/Nav'
import "./Contact.css"
import {AiFillPhone} from "react-icons/ai"
import { FaPhone } from 'react-icons/fa'

function Contact() {

  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"
  return (
    <>

      <section className="contact"
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
            "--contact_background": " rgb(250, 250, 250)",              
          
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
    </>
  )
}

export default Contact