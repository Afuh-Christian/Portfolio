import React , {createContext, useState} from 'react'
import { Outlet } from "react-router-dom"
import Nav from '../../Components/NavC/Nav'

export const NewContext = createContext() 

function SharedLayout() {
   const [on, setOn] = useState(false)

  return (
      <>
         <NewContext.Provider value={{on,setOn}}>
          <Nav />
          <section>
              <Outlet/>
              </section>
              </NewContext.Provider>
    </>
  )
}

export default SharedLayout