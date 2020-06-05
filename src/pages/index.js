import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Launches } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Launches />
  </Layout>
)

export default IndexPage
