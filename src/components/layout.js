import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Footer from "./Footer/Footer"
import Header from "./Header/header"
import { GlobalStyles } from "./layoutStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  min-height: 70vh;
  padding: 1.45rem 1.0875rem;
  margin-bottom: 120px;
`

export default Layout
