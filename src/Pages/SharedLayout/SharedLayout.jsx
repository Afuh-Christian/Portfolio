import React from 'react'
import { Outlet } from "react-router-dom"
import Nav from '../../Components/NavC/Nav'

function SharedLayout() {
  return (
      <>
          <Nav />
          <section>
              <Outlet/>
          </section>
      </>
  )
}

export default SharedLayout