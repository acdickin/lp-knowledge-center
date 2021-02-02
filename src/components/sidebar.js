import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Sidebar = () => {
  const data = useStaticQuery(graphql`
  query SidebarQuery {
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
                                          title {
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
                                  title {
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
                          title {
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
    "categorylist",
    "subcategoryfolder",
    "pagesfolder",
  ];
  const LEAF_NAME = [
    "categoryname",
    "subcategories",
    "page",
    "level3"
  ];
  const renderSubItem = (items, url, level) => {
    console.log("items", items);
    return items.map(node => {
      console.log("node", node.system.codename)
      console.log("level", level)
      let newUrl = (level > 0) ? node.system.codename.value : url + node.system.codename.value;
      if (node.system.type === "navigation_item") {
        return (
          <ul className={FOLDER_NAME[level]}>
            <li class="categoryfolder">
              <div class="itemdetails canOpen">
                <span>{node.elements.title.value}</span>
              </div>
              {renderSubItem(node.elements.subitems.value, newUrl, level + 1)}
            </li>
          </ul>
        )
      } else {

        return (
          <li class={LEAF_NAME[level]}>
            <span><a href={"/" + newUrl}>{node.elements.title.value}</a></span>
          </li >
        )
      }
    })

  }

  return (
    <div className="mysidebar">
      Sidebar
      <ul id="mysidebar">
        {renderSubItem(data.allKontentItemNavigationItem.nodes[0].elements.subitems.value, '', 0)}
      </ul>
    </div>
  )
}


export default Sidebar