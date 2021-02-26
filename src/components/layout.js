/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Sidebar from "./sidebar"
import SidebarDev from "./sidebar-dev"
import Footer from "./footer"

const Layout = ({ children }) => {
  const initialMode = (typeof window !== 'undefined') ? (localStorage === undefined) ? 'light' : localStorage.getItem('jlmode') : 'light';
  // Figure out why this works/ doesnt
  // const initalExperiance = (typeof window !== 'undefined') ? (localStorage === undefined) ? 'knowledge' : localStorage.getItem('exp') : 'knowledge';
  const [mode, setMode] = useState(initialMode)
  const [experiance, setExperiance] = useState('knowledge')

  useEffect(() => {
    if (mode === null || mode === undefined) {
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

  // useEffect(() => {
  //   if (experiance === null || experiance === undefined) {
  //     setExperiance('knowledge');
  //     localStorage.setItem('exp', 'knowledge');
  //   }
  //   if (experiance === 'dev' && typeof window !== 'undefined') {
  //     localStorage.setItem('exp', 'dev')
  //   }
  //   else if (experiance === 'knowledge' && typeof window !== "undefined") {
  //     localStorage.setItem('exp', 'knowledge')
  //   }
  // }, [experiance])

  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className="flex-container">
        <Header mode={mode} setMode={setMode} setExperiance={setExperiance} experiance={experiance} />
        <div className="flex grow">
          {(experiance === "knowledge") ? < Sidebar /> : <SidebarDev />}

          <div className="flex column p-6 w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
