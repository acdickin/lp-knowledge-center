/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


exports.onClientEntry = () => {
  const urlArray = window.location.pathname.split('/')
  const lang = navigator.language
  console.log("path: ", urlArray)
  const page = urlArray[urlArray.length - 2]
  console.log("page:", page);
  console.log(lang)
  // TODO: Handle languages we dont have, make sure a 404 page is created in KONTENT
  if (urlArray.length > 2 && urlArray[1] !== lang && lang !== "en-US") {
    const url = `/${lang}/${page}/`
    console.log("url", url)
    window.location.pathname = `${url}`
  }
}