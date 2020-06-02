import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Launches } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Launches />
  </Layout>
)

export default IndexPage
