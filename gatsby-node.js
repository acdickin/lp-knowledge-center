/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const result = await graphql(navPagesQuery)

  const PageBuilder = (nodes, url, breadcrumb, level) => {
    nodes.forEach(node => {
      let newUrl = (level > 1) ? url + "-" + node.system.codename.replace(/_/g, '-') : node.system.codename.replace(/_/g, '-');
      let newBreadCrumb = (level > 1) ? breadcrumb + "%" + node.elements.title.value : node.elements.title.value;
      if (node.system.type === "product_overview") {
        createPage({
          path: newUrl,
          component: path.resolve(`./src/components/page.js`),
          context: {
            elements: node.elements,
            breadCrumbs: newBreadCrumb.split('%')
          },
        })
      }
      else {
        if (node.elements.subitems.value.length > 0) PageBuilder(node.elements.subitems.value, newUrl, newBreadCrumb, level + 1)
      }
    })
  }

  // Create pages
  result.data.allKontentItemNavigationItem.nodes.forEach(node => {
    let url = ""
    let breadcrumb = new Array()
    //TODO
    //Get rid of level by passing the subitems of root instead of root itself
    PageBuilder(node.elements.subitems.value, url, breadcrumb, 1)
  })
}

let navPagesQuery = `
  {
    allKontentItemNavigationItem (filter: {system: {codename: {eq: "root"}}}){
      nodes {
        system {
          codename
          type
        }
        elements {
          title {
            value
          }
          subitems {
            value {
              ... on kontent_item_navigation_item {
                system {
                  codename
                  type
                }
                elements {
                  title {
                    value
                  }
                  subitems {
                    value {
                      ... on kontent_item_navigation_item {
                        system {
                          codename
                          type
                        }
                        elements {
                          title {
                            value
                          }
                          subitems {
                            value {
                              ... on kontent_item_navigation_item {
                                system {
                                  codename
                                  type
                                }
                                elements {
                                  title {
                                    value
                                  }
                                  subitems {
                                    value {
                                      ... on kontent_item_navigation_item {
                                        system {
                                          codename
                                          type
                                        }
                                      }
                                      ... on kontent_item_product_overview {
                                        system {
                                          codename
                                          type
                                        }
                                        elements {
                                          body {
                                            value
                                          }
                                          post_tags {
                                            value {
                                              name
                                            }
                                          }
                                          product_description {
                                            value
                                          }
                                          published {
                                            value(fromNow: true)
                                          }
                                          title {
                                            value
                                          }
                                          url {
                                            value
                                          }
                                          why_the_product_is_useful {
                                            value
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              ... on kontent_item_product_overview {
                                system {
                                  codename
                                  type
                                }
                                elements {
                                  body {
                                    value
                                  }
                                  post_tags {
                                    value {
                                      name
                                    }
                                  }
                                  product_description {
                                    value
                                  }
                                  published {
                                    value(fromNow: true)
                                  }
                                  title {
                                    value
                                  }
                                  url {
                                    value
                                  }
                                  why_the_product_is_useful {
                                    value
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      ... on kontent_item_product_overview {
                        system {
                          codename
                          type
                        }
                        elements {
                          body {
                            value
                          }
                          post_tags {
                            value {
                              name
                            }
                          }
                          product_description {
                            value
                          }
                          published {
                            value(fromNow: true)
                          }
                          title {
                            value
                          }
                          url {
                            value
                          }
                          why_the_product_is_useful {
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on kontent_item_product_overview {
                system {
                  codename
                  type
                }
                elements {
                  body {
                    value
                  }
                  post_tags {
                    value {
                      name
                    }
                  }
                  product_description {
                    value
                  }
                  published {
                    value(fromNow: true)
                  }
                  title {
                    value
                  }
                  url {
                    value
                  }
                  why_the_product_is_useful {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`