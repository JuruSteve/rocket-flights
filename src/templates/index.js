import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Launches } from "../components"
import AllLaunches from "../templates/allLaunches"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Launches /> */}
    <AllLaunches />
  </Layout>
)

export default IndexPage
