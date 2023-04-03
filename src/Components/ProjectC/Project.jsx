import React from 'react'
import Nav from '../NavC/Nav'
import "./Project.css"


const projects = [
  {
    projectType: "Website Projects",
    list: [
      {
        tool: {
          name: "Next js", 
          logo: "Image/nextjs.svg"
        },
        websitename: "Queenzee.com", 
        description: "A site for selling milinary products such as designer  caps , bags , wallets etc world wide "
        , logo: "Image/projects/queen.svg", 
        link: "visit site "
      },
      {
        tool: {
          name: "Next js", 
          logo: "Image/nextjs.svg"
        },
        websitename: "Queenzee.com", 
        description: "A site for selling milinary products such as designer  caps , bags , wallets etc world wide "
        , logo: "Image/projects/queen.svg", 
        link: "visit site "
      },
    ]  
  },

]



function Project() {
  const navTextColor = "black"
  const navTextHighlightColor = "rgb(159, 158, 158)"
  return (
    <>
     
      <section className="project"
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
        
         
         "--single_skill_background":"",
         "--single_skill_shadow":"",
      }}
      >
      <ul>
      {projects.map((projecttype) => (
   

       <li className="pID">
         <ul>
                <li className="type"><div>{projecttype.projectType}</div></li>
           <li>
             <ul>
                {/* ONe project */}
                    {projecttype.list.map((project) => (
                   <li>
                   <ul>
                     <li className="h1">
                            <div>{project.tool.name}</div>
                       <img src={project.tool.logo} alt="" />
                     </li>
                     <li className="proj">
                       <ul>
                              <li className="h2">{project.websitename}</li>
                         <li className="txt">
                        {project.description} 
                         </li>
                         <li className="ima"><img src={project.logo} alt="" /></li>
                         <li className="btn"> <div> {project.link} </div></li>
                       </ul>
                     </li>
                   </ul>
                 </li>
               ))}     
             
             </ul>
           </li>
         </ul>
       </li>
 

      ) )}
    </ul>
</section>
      
 
    </>
  )
}

export default Project



    //  <section className="project">
    //     <ul>
    //       <li className="pID">
    //         <ul>
    //           <li className="type"><div>Website Projects</div></li>
    //           <li>
    //             <ul>

    //               {/* ONe project */}
    //               <li>
    //                 <ul>
    //                   <li className="h1">
    //                   <div>Next js</div>
    //                     <img src="Image/nextjs.svg" alt="" />
    //                   </li>
    //                   <li className="proj">
    //                     <ul>
    //                       <li className="h2">Queenzee.com</li>
    //                       <li className="txt">
    //                       A site for selling milinary products such as designer  caps , bags , wallets etc world wide 
    //                       </li>
    //                       <li className="ima"><img src="Image/projects/queen.svg" alt="" /></li>
    //                       <li className="btn"> <div> visit site </div></li>
    //                     </ul>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    // </section>