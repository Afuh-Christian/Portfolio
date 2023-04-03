import "./Skills.css"

import React, { useContext } from 'react'
import { NewContext } from "../../Pages/SharedLayout/SharedLayout"

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

    const context = useContext(NewContext)

  return (
      <section className="skills_parent" style={{
        ...context.color_mode,
          "--bodyHeight": `${context.windowD.height}px`,
        //   height: `${context.windowD.height}px`, 
        // backgroundColor: context.color_mode["--body"]
        
    }}>
          <section className="skills"
              style={{
                
                ...context.color_mode
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