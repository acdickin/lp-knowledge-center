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
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 1386303,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-277946-55", // Google Analytics / G
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: `be8baa38-7b19-0054-b22b-084718bea24d`, // Fill in your Project ID
        // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
        languageCodenames: [
          `default`, // Or the languages in your project (Project settings -> Localization)
          `de`
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