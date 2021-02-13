// import { Link } from "gatsby"

import React from "react"
import Search from "./search"
import logo from "../images/lp-logo.svg"

const Header = () => {
  // TODO Use env vars id 
  const searchIndices = [{ name: 'KNOWLEDGE', title: 'KNOWLEDGE' }]
  return (
    <div
      className="header align-center"
      style={{
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <div id="logocontainer">
        <a href="/">
          <img className="m-0" src={logo} />
        </a>
      </div>
      <Search indices={searchIndices} />
      {/* <input type="text" id="aa-search-input" className="aa-input-search" placeholder="Search our knowledge center..." name="search" autoComplete="on" /> */}
      <div id="homebuttons">
        <span id="login" className="homebutton">
          <a className="text-white" target="_blank" href="https://liveengage.liveperson.net">
            LivePerson login
          </a>
        </span>
      </div>
      <a href="https://knowledge.liveperson.com/" className="casey flex items-center">
        <img className="caseyPortrait m-0" src="img/open-casey-header.svg" />
        <span className="text-white ml-2">CASEY</span>
      </a>
    </div>
  )
}

export default Header
