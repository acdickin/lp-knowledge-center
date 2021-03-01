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

const LayoutIndex = ({ children }) => {

  // The typeof window check is required because gatbsy doesn't recongnize local storage when building
  let initialMode = (typeof window !== 'undefined') ? window.localStorage.getItem('jlmode') || 'light' : 'light';
  let initalExperiance = (typeof window !== 'undefined') ? window.localStorage.getItem('exp') || 'knowledge' : 'knowledge';

  const [mode, setMode] = useState(initialMode)
  const [experiance, setExperiance] = useState(initalExperiance)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light');
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
      window.localStorage.setItem('jlmode', mode)
    }
  }, [mode])
  useEffect(() => (typeof window !== 'undefined') ? window.localStorage.setItem('exp', experiance) : null, [experiance])

  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className="flex-container">
        <Header mode={mode} setMode={setMode} setExperiance={setExperiance} experiance={experiance} />
        <div className="home lp-content flex grow">
          <div className="content flex column grow">{children}
          {(experiance === "knowledge") ? < Sidebar /> : <SidebarDev />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutIndex
