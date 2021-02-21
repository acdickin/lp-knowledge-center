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

const Layout = ({ children }) => {
  return (
    <>
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </head>
      <div className="flex-container">
        <Header />
        <div className="flex column grow">
          <div className="flex column full-width">{children}</div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
