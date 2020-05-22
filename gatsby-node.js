exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/flight/)) {
    page.matchPath = "/flight/*"
    actions.createPage(page)
  }
}
