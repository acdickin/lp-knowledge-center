// import { Link } from "gatsby"

import React from "react"

const Header = () => {
  return (
    <div id="defaultheader" style={{
      justifyContent: "space-between",
      display: "flex"
    }}>
      <div id="logocontainer">
        <a href="/"><img src="img/lp-logo.svg" /></a>
      </div>
      <input type="text" id="aa-search-input" className="aa-input-search" placeholder="Search our knowledge center..." name="search" autoComplete="on" />
      <div id="homebuttons">
        <span id="login" className="homebutton"><a target="_blank" href="https://liveengage.liveperson.net">LivePerson login</a></span>
      </div>
      <a href="https://knowledge.liveperson.com/" class="casey"><img class="caseyPortrait" src="img/open-casey-header.svg" /><span>CASEY</span></a>
    </div>
  )
}



export default Header
