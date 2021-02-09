import React from "react"

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
        return <span className="breadcrumb-item" key={crumb.title}>{title}</span>
      })
    }
  }
  const createTags = (tags) => {
    if (tags.value) {
      return tags.value.map(tag => {
        return <div key={tag.name}>{tag.name}</div >
      })
    }
  }
  return (
    <>
      { createBreadrumb(breadCrumbs)}
      <h1 id="maintitle"> {title.value} </h1>
      <div id="subtitle" dangerouslySetInnerHTML={{ __html: why_the_product_is_useful.value }} />
      <div className="indicators">
        {createTags(post_tags)}
      </div>

    </>
  )
}

export default ContentHeader