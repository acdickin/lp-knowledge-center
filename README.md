
## LivePerson Knowledge Center

This repository generates LivePerson's Knowledge Center, which can be found at [knowledge.liveperson.com](https://knowledge.liveperson.com/). The site is generated using [Gatsby](https://https://www.gatsbyjs.com/) and data from [Kontent](https://kontent.ai/) 

**This site is maintained by the Product Communications and Experience team. Please contact lmart@liveperson.com for issues, questions, and the such**.

### Building the Site Locally

1. Run `npm install`. This will install all the node packages that the site depends on. Only needs to be run on first install and when changes are made to package.json 
2.
  a. Run `npm start`. This builds the site and serves it over localhost:8000 it also serves grapql tool at http://localhost:8000/___graphql
  b. Run `npm run build`. This builds the `_site` folder

## Kontnet and Gatsby
With in the gatsby-config file we call @kentico/gatsby-source-kontent. This is what connects Kontent to gatsby. 
Using that connection we are able to call the graphql data in gatsby-node and create pages there
Fore mor information see [Sourcing from Kontico Kontent](https://www.gatsbyjs.com/docs/sourcing-from-kentico-kontent/)

### Licensing

All usage of the contents, documentation or code found in this repository is subject to the [LivePerson API Terms of Use](https://www.liveperson.com/policies/apitou). Please use the link above to read them carefully before utilizing the site.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
# lp-knowledge-center
