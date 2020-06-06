const fetch = require("node-fetch")
const uuidv4 = require("uuid").v4
const createNodeHelpers = require("gatsby-node-helpers").default

const getLaunchesData = () => fetch("https://api.spacexdata.com/v3/launches")

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const { createNodeFactory, generateNodeId } = createNodeHelpers({
    sourceId: uuidv4(),
    typePrefix: "SpacexApi",
  })
  const prepareLaunchNode = createNodeFactory("Launches")

  // All Launches
  const res = await getLaunchesData()
  const allLaunches = await res.json()
  // process data into Gatsby node format
  const processLaunch = launch => {
    // create the "Launch" node for given launch
    const launchNode = prepareLaunchNode(launch, {
      id: generateNodeId("Launches", uuidv4()),
    })
    return launchNode
  }

  // Process data into nodes
  allLaunches.forEach(async (launch, i) => {
    createNode(processLaunch(launch))
  })
}
