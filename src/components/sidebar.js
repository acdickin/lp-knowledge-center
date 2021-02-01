import React from "react"


const Sidebar = () => {
  // const data = useStaticQuery(graphql(navQuery))
  // console.log(data);
  // const FOLDER_NAME = [
  //   "categorylist",
  //   "subcategoryfolder",
  //   "pagesfolder",
  // ];
  // const LEAF_NAME = [
  //   "categoryname",
  //   "subcategories",
  //   "page",
  //   "level3"
  // ];
  // const renderSubItem = () => {

  // }

  return (
    <div>
      Sidebar
    </div>
  )
}
// let navQuery = `
//   {
//     allKontentItemNavigationItem (filter: {system: {codename: {eq: "root"}}}){
//       nodes {
//         system {
//           codename
//           type
//         }
//         elements {
//           title {
//             value
//           }
//           subitems {
//             value {
//               ... on kontent_item_navigation_item {
//                 system {
//                   codename
//                   type
//                 }
//                 elements {
//                   title {
//                     value
//                   }
//                   subitems {
//                     value {
//                       ... on kontent_item_navigation_item {
//                         system {
//                           codename
//                           type
//                         }
//                         elements {
//                           title {
//                             value
//                           }
//                           subitems {
//                             value {
//                               ... on kontent_item_navigation_item {
//                                 system {
//                                   codename
//                                   type
//                                 }
//                                 elements {
//                                   title {
//                                     value
//                                   }
//                                   subitems {
//                                     value {
//                                       ... on kontent_item_navigation_item {
//                                         system {
//                                           codename
//                                           type
//                                         }
//                                       }
//                                       ... on kontent_item_product_overview {
//                                         system {
//                                           codename
//                                           type
//                                         }
//                                         elements {
//                                           title {
//                                             value
//                                           }
//                                         }
//                                       }
//                                     }
//                                   }
//                                 }
//                               }
//                               ... on kontent_item_product_overview {
//                                 system {
//                                   codename
//                                   type
//                                 }
//                                 elements {
//                                   title {
//                                     value
//                                   }
//                                 }
//                               }
//                             }
//                           }
//                         }
//                       }
//                       ... on kontent_item_product_overview {
//                         system {
//                           codename
//                           type
//                         }
//                         elements {
//                           title {
//                             value
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//               ... on kontent_item_product_overview {
//                 system {
//                   codename
//                   type
//                 }
//                 elements {
//                   title {
//                     value
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
export default Sidebar