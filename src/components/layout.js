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
  return (
    <>
      <div className="flex-container">
        <Header />
        <div className="flex grow">
          <Sidebar />
          <div className="flex column">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
