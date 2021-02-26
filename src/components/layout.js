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
  const initialMode = localStorage.getItem('jlmode') || 'light';
  const initalExperiance = localStorage.getItem('exp') || 'knowledge';

  const [mode, setMode] = useState(initialMode)
  const [experiance, setExperiance] = useState(initalExperiance)

  useEffect(() => localStorage.setItem('jlmode', mode), [mode])
  useEffect(() => localStorage.setItem('exp', experiance), [experiance])

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
