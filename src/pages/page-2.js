import React from "react"
import { Link } from "gatsby"

import Layoutinner from "../components/layout-inner"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layoutinner>
    <SEO title="Page two" />
    <h1 className="text-4xl">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layoutinner>
)

export default SecondPage
