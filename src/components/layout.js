/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const page = {
    display: 'flex'
  }

  return (
    <>
      <Header />
      <div style={page}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}


export default Layout
