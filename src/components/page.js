import React from "react"
import ContentHeader from "./content-header"
import JumpTo from "./jump-to"
import Layout from "./layout"
import parse from 'html-react-parser';
const Page = props => {

  const {
    body,
    title,
    why_the_product_is_useful,
    post_tags,
  } = props.pageContext.elements
  const { breadCrumbs } = props.pageContext
  return (
    <Layout>
      <div className="flex">
        <div>
          <ContentHeader
            breadCrumbs={breadCrumbs}
            title={title}
            why_the_product_is_useful={why_the_product_is_useful}
            post_tags={post_tags}
          />
          <div>
            {parse(body.value)}
          </div>
        </div>
        <JumpTo title={title.value} />
      </div>
    </Layout>
  )
}

export default Page
