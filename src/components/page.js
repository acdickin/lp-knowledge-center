import React from "react"
// import ContentHeader from './content-header'
// import JumpTo from "./jump-to"
// import { RichText } from "prismic-reactjs";
import Layout from "./layout"
const Page = (props) => {
  console.log(props)
  // const { body, breadcrumb, title, why_the_product_is_useful, post_tags } = props
  return (
    <Layout>
      {/* <ContentHeader breadcrumb={breadcrumb} title={title} why_the_product_is_useful={why_the_product_is_useful} post_tags={post_tags} />
      {RichText.asText(body.value)}
      <JumpTo /> */}
      testing
    </Layout>
  )
}

export default Page