const fetch = require("node-fetch")

exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/flight/)) {
    page.matchPath = "/flight/*"
    actions.createPage(page)
  }
}

exports.createPages = async ({ actions }) => {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json()
  const launchesPerPage = 12
  const totalPages = Math.ceil(data.length / launchesPerPage)

  Array.from({ length: totalPages }).forEach((_, i) => {
    actions.createPage({
      path: i == 0 ? `/` : `/${i + 1}`,
      component: require("path").resolve(`./src/templates/allLaunches.js`),
      context: {
        skip: i * launchesPerPage,
        limit: launchesPerPage,
        launchesPerPage,
        currentPage: i + 1,
      },
    })
  })
}
