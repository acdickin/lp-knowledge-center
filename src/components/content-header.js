import React from "react"

const ContentHeader = (props) => {
  const { breadCrumbs, title, why_the_product_is_useful } = props
  // const { body, breadCrumbs, title, why_the_product_is_useful, post_tags } = props
  const createBreadrumb = (breadCrumbs) => {
    //assuming we somehow get an array names 
    console.log(breadCrumbs)
    if (breadCrumbs) {
      let last = breadCrumbs.length - 1
      return breadCrumbs.map((crumb, index) => {
        console.log(crumb);
        let title = crumb
        if (index !== last) {
          title += " > "
        }

        return <span className="breadcrumb-item" key={crumb.title}>{title}</span>
      })
    }
  }
  // const createTags(Tags){

  //   return results;
  // }
  return (
    <>
      { createBreadrumb(breadCrumbs)}
      <h1> {title.value} </h1>
      <div id="subtitle" dangerouslySetInnerHTML={{ __html: why_the_product_is_useful.value }} />
      {/* { createTags(tags)} */}

    </>
  )
}

export default ContentHeader