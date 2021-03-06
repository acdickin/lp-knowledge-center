import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Sidebar = () => {

  const data = useStaticQuery(graphql`
    query SidebarQueryDev {
      allKontentItemNavigationDev (filter: {system: {codename: {eq: "root_dev"}}}){
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
                ... on kontent_item_navigation_dev {
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
                        ... on kontent_item_navigation_dev {
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
                                ... on kontent_item_navigation_dev {
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
                                        ... on kontent_item_navigation_dev {
                                          system {
                                            codename
                                            type
                                          }
                                        }
                                        ... on kontent_item_product_dev {
                                          system {
                                            codename
                                            type
                                          }
                                          elements {
                                            title {
                                              value
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                ... on kontent_item_product_dev {
                                  system {
                                    codename
                                    type
                                  }
                                  elements {
                                    title {
                                      value
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ... on kontent_item_product_dev {
                          system {
                            codename
                            type
                          }
                          elements {
                            title {
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on kontent_item_product_dev {
                  system {
                    codename
                    type
                  }
                  elements {
                    title {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  );

  const FOLDER_NAME = [
    "categoryfolder",
    "subcategoryfolder",
    "pagesfolder",
    "level3folder"
  ];
  const LEAF_NAME = [
    "categoryname",
    "subcategories",
    "page",
    "level3"
  ];

  const renderSubItem = (items, url, level) => {
    return items.map(node => {
      let newUrl = (level > 0) ? url + "-" + node.system.codename.replace(/_/g, '-') : node.system.codename.replace(/_/g, '-');
      if (node.system.type === "navigation_dev") {
        return (
          <li key={FOLDER_NAME[level] + node.elements.title.value} className={FOLDER_NAME[level]}>
            <div className="itemdetails canOpen">
              <span>{node.elements.title.value}</span>
            </div>
            <ul>
              {renderSubItem(node.elements.subitems.value, newUrl, level + 1)}
            </ul>
          </li>
        )
      } else {
        return (
          <li key={FOLDER_NAME[level] + node.elements.title.value} className={LEAF_NAME[level]}>
            <span><a href={"/" + newUrl}>{node.elements.title.value}</a></span>
          </li >
        )
      }
    })
  }
  return (
    <div className="sidebar block flex-wrap list-none" >
      {renderSubItem(data.allKontentItemNavigationDev.nodes[0].elements.subitems.value, '', 0)}
    </div>
  )
}


export default Sidebar