import "./Skills.css"

import React from 'react'

const skills = [
    {
        path: "html", 
        skillList: [
            {
                name: "HTML", 
                logo: "Image/html.svg"
            },
            {
                name: "CSS", 
                logo: "Image/css.svg"
            },
            {
                name: "BOOTSTRAP", 
                logo: "Image/bootstrap.svg"
            },
            {
                name: "FIGMA", 
                logo: "Image/figma.svg"
            },
        ]
    },



    {
        path: "javascript", 
        skillList: [
            {
                name: "JAVASCRIPT", 
                logo: "Image/js.svg"
            },
            {
                name: "TYPESCRIPT", 
                logo: "Image/ts.svg"
            },
            {
                name: "REACT", 
                logo: "Image/reactjs.svg"
            },
            {
                name: "REACT NATIVE", 
                logo: "Image/react-native.svg"
            },
            {
                name: "NEXT JS", 
                logo: "Image/nextjs.svg"
            },
            {
                name: "ANGULAR", 
                logo: "Image/angular.svg"
            },
            {
                name: "NODE", 
                logo: "Image/node.svg"
            },
            {
                name: "EXPRESS", 
                logo: "Image/expressjs.svg"
            },
            {
                name: "NEST JS", 
                logo: "Image/nestjs.svg"
            },
            {
                name: "NPM", 
                logo: "Image/npm.svg"
            },
            {
                name: "REST API", 
                logo: "Image/rest-api.svg"
            },
        ]
    },


    {
        path: "python", 
        skillList: [
            {
                name: "PYTHON", 
                logo: "Image/python.svg"
            },
            {
                name: "DJANGO", 
                logo: "Image/django.svg"
            },
            {
                name: "PIP", 
                logo: "Image/pip.svg"
            },
        ]
    },



    {
        path: "ci/cd workflow", 
        skillList: [
            {
                name: "GIT", 
                logo: "Image/git.svg"
            },
            {
                name: "GITHUB", 
                logo: "Image/github.svg"
            },
            {
                name: "DOCKER", 
                logo: "Image/docker.svg"
            },
            {
                name: "KUBERNETES", 
                logo: "Image/kubernetes.svg"
            },
        ]
    },
]


function Skills() {
    const navTextColor = "black"
    const navTextHighlightColor = "rgb(159, 158, 158)"
  return (
      <section className="skills_parent">
          <section className="skills"
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
                "--project_link_btn_background":" rgb(85, 83, 83)",
                 "--project_link_btn_color": "white",
                "--project_single_background_Shadow":"10px 10px 20px 5px rgba(0, 0, 0, 0.25)",
                 "--project_single_background": "white",
                
                 
                 "--single_skill_background":"aliceblue",
                 "--single_skill_shadow":"10px 10px 20px rgba(0, 0, 0, 0.25)",
              }}
          >
              <ul>
                <li className="h1">
                    <div>These are the technologies I'm familiar with.</div>
                </li>
                <li className="list">
                      <ul>
                          {/* one path */}
                          {skills.map((path) => (
                               <li className="lang_path">
                               <ul>
                                   {/* one skill */}
                                      {path.skillList.map((skill) => (
                                        <li className="skill">
                                        <img src={skill.logo} alt="" />
                                              <div>{skill.name}</div>
                                    </li>
                                   ))}
                                     
                               </ul>
                           </li>
                          ))}
                         
                       
                      </ul>
                  </li>
              </ul>
            </section>
      </section>
  )
}

export default Skills