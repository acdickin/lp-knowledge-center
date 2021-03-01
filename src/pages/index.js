import React from "react"
import { Link } from "gatsby"

import LayoutIndex from "../components/layout-index"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../stylesheets/main.scss"

const IndexPage = () => (
  <LayoutIndex>
    <SEO title="Home" />
    <section className="hero flex justify-between section-space">
      <div className="flex column justify-center">
        <h4>Our new Help Center</h4>
        <h1>Kontent CMS POC</h1>
      </div>
      <div>
        <img
          alt="heroimg"
          src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/book-resource-illo-rev.svg"
        />
      </div>
    </section>
    <div className="divider"></div>
    <section className="boxes-block gap flex justify-between section-space flex-wrap">
      <div className="box flex column justify-center">
        <h3>Getting started with messaging</h3>
        <p>
          Checklist for set up and configuration to get your messaging program
          running
        </p>
      </div>
      <div className="box flex column justify-center">
        <h3>Getting started with messaging</h3>
        <p>
          Checklist for set up and configuration to get your messaging program
          running
        </p>
      </div>
      <div className="box flex column justify-center">
        <h3>Getting started with messaging</h3>
        <p>
          Checklist for set up and configuration to get your messaging program
          running
        </p>
      </div>
      <div className="box flex column justify-center">
        <h3>Getting started with messaging</h3>
        <p>
          Checklist for set up and configuration to get your messaging program
          running
        </p>
      </div>
    </section>
    <div className="flex justify-center">
      {/* <Image /> */}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </LayoutIndex>
)

export default IndexPage
