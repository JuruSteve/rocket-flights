const fetch = require("node-fetch")
const paginate = require("gatsby-awesome-pagination").paginate

exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/flight/)) {
    page.matchPath = "/flight/*"
    actions.createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allSpacexApiLaunches {
        edges {
          node {
            id
            mission_name
          }
        }
      }
    }
  `)
  // const res = await fetch("https://api.spacexdata.com/v3/launches")
  // const udata = await res.json()
  const launchesPerPage = 12
  const totalPages = Math.ceil(
    data.allSpacexApiLaunches.edges &&
      data.allSpacexApiLaunches.edges.length / launchesPerPage
  )
  Array.from({ length: totalPages }).forEach((_, i) => {
    actions.createPage({
      path: i == 0 ? `/` : `/${i + 1}`,
      component: require.resolve(`./src/templates/allLaunches.js`),
      context: {
        skip: i * launchesPerPage,
        limit: launchesPerPage,
        launchesPerPage,
        currentPage: i + 1,
      },
    })
  })

  // Create Single Launch Page
  data.allSpacexApiLaunches.edges &&
    data.allSpacexApiLaunches.edges.forEach(edge => {
      const slug = edge.node.mission_name
      const id = edge.node.id
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/singleLaunch.js`),
        context: { id },
      })
    })
}
