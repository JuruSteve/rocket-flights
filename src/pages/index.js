import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Launches from '../components/Launches/Launches'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Launches />
  </Layout>
)

export default IndexPage
