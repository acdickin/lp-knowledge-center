// import { Link } from "gatsby"

import React from "react"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Header = () => {
  return (
    <div id="defaultheader" style={{
      justifyContent: "space-between",
      display: "flex"
    }}>
      <div id="logocontainer">
        <a href="/"><img src="img/lp-logo.svg" /></a>
      </div>
      <Search indices={searchIndices} />
      {/* <input type="text" id="aa-search-input" className="aa-input-search" placeholder="Search our knowledge center..." name="search" autoComplete="on" /> */}
      <div id="homebuttons">
        <span id="login" className="homebutton"><a target="_blank" href="https://liveengage.liveperson.net">LivePerson login</a></span>
      </div>
      <a href="https://knowledge.liveperson.com/" className="casey"><img className="caseyPortrait" src="img/open-casey-header.svg" /><span>CASEY</span></a>
    </div>
  )
}



export default Header
