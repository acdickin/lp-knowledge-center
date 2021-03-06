import React from "react"
import parse from 'html-react-parser';

const ContentHeader = (props) => {
  const { breadCrumbs, title, why_the_product_is_useful, post_tags } = props

  const createBreadrumb = (breadCrumbs) => {
    if (breadCrumbs) {
      let last = breadCrumbs.length - 1
      return breadCrumbs.map((crumb, index) => {
        let title = crumb
        if (index !== last) {
          title += " > "
        }
        return <span key={crumb + index} className="breadcrumb-item" >{title}</span>
      })
    }
  }
  const createTags = (tags) => {
    if (tags.value) {
      return tags.value.map(tag => {
        return <div key={"Tag." + tag.name}>{tag.name}</div >
      })
    }
  }
  return (
    <>
      { createBreadrumb(breadCrumbs)}
      <h1 className="text-4xl" id="maintitle"> {title.value} </h1>
      <div id="subtitle">
        {parse(why_the_product_is_useful.value)}
      </div>
      <div className="indicators">
        {createTags(post_tags)}
      </div>
    </>
  )
}

export default ContentHeader