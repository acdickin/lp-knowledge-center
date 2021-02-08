import React from "react"
import ContentHeader from './content-header'
import JumpTo from "./jump-to"
import Layout from "./layout"

const Page = (props) => {
  const { body, title, why_the_product_is_useful, post_tags } = props.pageContext.elements
  const { breadCrumbs } = props.pageContext;
  return (
    <Layout>
      <div className="main-content">
        <ContentHeader breadCrumbs={breadCrumbs} title={title} why_the_product_is_useful={why_the_product_is_useful} post_tags={post_tags} />
        <div dangerouslySetInnerHTML={{ __html: body.value }} />
      </div>
      <JumpTo title={title.value} />
    </Layout>
  )
}

export default Page