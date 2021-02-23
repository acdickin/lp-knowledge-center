/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Helmet } from "react-helmet"
import React, { useState, useEffect } from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const initialMode = (typeof window !== 'undefined') ? (localStorage === undefined) ? 'light' : localStorage.getItem('jlmode') : 'light';
  const [mode, setMode] = useState(initialMode)

  useEffect(() => {
    if (mode === null | mode === undefined) {
      setMode('light');
      localStorage.setItem('jlmode', 'light');
    }
    if (mode === 'dark' && typeof window !== 'undefined') {
      localStorage.setItem('jlmode', 'dark')
      document.body.classList.remove('light');
      document.body.classList.add(mode);
    }
    else if (mode === 'light' && typeof window !== "undefined") {
      localStorage.setItem('jlmode', 'light')
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
    }
  }, [mode])



  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className="flex-container">
        <Header mode={mode} setMode={setMode} />
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
