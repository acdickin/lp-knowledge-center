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
import "../stylesheets/main.scss"

const Layout = ({ children }) => {
  const page = {
    display: 'flex'
  }

  return (
    <>
      <div className="grid-container">
        <Header />
        <div style={page}>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
