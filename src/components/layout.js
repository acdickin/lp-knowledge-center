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
    <div className="grid-container">
      <Header />
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
      </div>
    </>
  )
}

export default Layout
