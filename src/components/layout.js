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

  // The typeof window check is required because gatbsy doesn't recongnize local storage when building
  let initialMode = (typeof window !== 'undefined') ? window.localStorage.getItem('jlmode') || 'light' : 'light';
  let initalExperiance = (typeof window !== 'undefined') ? window.localStorage.getItem('exp') || 'knowledge' : 'knowledge';

  if (typeof window !== 'undefined') {
    useEffect(() => window.localStorage.setItem('jlmode', mode), [mode])
    useEffect(() => window.localStorage.setItem('exp', experiance), [experiance])
  }
  const [mode, setMode] = useState(initialMode)
  const [experiance, setExperiance] = useState(initalExperiance)
  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className={"flex-container " + mode}>
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
