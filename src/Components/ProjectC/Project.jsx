import React, { useContext } from 'react'
import { NewContext } from '../../Pages/SharedLayout/SharedLayout'
import Nav from '../NavC/Nav'
import "./Project.css"

const projects = [ ]
// const projects = [
//   {
//     projectType: "Website Projects",
//     list: [
//       {
//         tool: {
//           name: "Next js", 
//           logo: "Image/nextjs.svg"
//         },
//         websitename: "Queenzee.com", 
//         description: "A site for selling milinary products such as designer  caps , bags , wallets etc world wide "
//         , logo: "Image/projects/queen.svg", 
//         link: "visit site "
//       },
//       {
//         tool: {
//           name: "Next js", 
//           logo: "Image/nextjs.svg"
//         },
//         websitename: "Queenzee.com", 
//         description: "A site for selling milinary products such as designer  caps , bags , wallets etc world wide "
//         , logo: "Image/projects/queen.svg", 
//         link: "visit site "
//       },
//     ]  
//   },

// ]



function Project() {

  const context = useContext(NewContext)
  return (
    <>
      <section className="project_parent"
       style={{
        "--bodyHeight": `${context.windowD.height}px`,
        ...context.color_mode
    }}
      >
      <section className="project"
       
      >
          <ul>
            
            {projects.length === 0 ? <> <h1> All projects are still on my github repo    <a href="https://github.com/Afuh-Christian/"></a>   </h1>
            
              <div>"Portfolio(This website)" with react js  <a href="https://github.com/Afuh-Christian/Portfolio">Link</a>  </div>
              <div>"Queenzee" with next js  <a href="https://github.com/Afuh-Christian/Cleanam">Link</a>  </div>
              <div>"Cleanam" with html and css <a href="https://github.com/Afuh-Christian/Queenzee">Link</a></div>
              {/* <div>Ziiface with React and django</div> */}
            </> : <>
      


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

</>

    }

            
    </ul>
        </section>
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