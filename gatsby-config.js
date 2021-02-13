require("dotenv").config({
  path: `.env`,
})
const myQuery = `
  {
    pages: allSitePage {
      nodes {
        id
        path
        context {
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
`
const removeTags = (html) => {
  return html.replace(/(<([^>]+)>)/ig, '')
}
const pageToAlgoliaRecord = (node) => {
  const { id, path, context } = node
  if (context !== null && context.elements !== null) {

    return {
      objectID: id,
      path,
      body: removeTags(context.elements.body.value),
      post_tags: context.elements.post_tags.value.map(value => value.name),
      product_description: removeTags(context.elements.product_description.value),
      title: removeTags(context.elements.title.value),
      url: context.elements.url.value,
      why_the_product_is_useful: removeTags(context.elements.why_the_product_is_useful.value)
    }
  }
}
const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes.map(pageToAlgoliaRecord).filter(el => el != null),
    indexName: process.env.ALGOLIA_INDEX
  }
]

module.exports = {
  siteMetadata: {
    title: `KnowledgeCenter`,
    description: `Liveperson knowledge center`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: process.env.KONTENT_ID, // Fill in your Project ID
        // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
        languageCodenames: [
          `default`, // Or the languages in your project (Project settings -> Localization)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.AGOLIA_ID,
        apiKey: process.env.ALGOLIA_KEY,
        indexName: process.env.ALGOLIA_INDEX,
        queries,
        options: {
          enablePartialUpdates: true,
        },
        settings: {
          searchableAttributes: ['title', 'post_tags', 'product_description', 'why_the_product_is_useful', 'body'],
        },

      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}