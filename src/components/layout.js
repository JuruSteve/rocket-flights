import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from "."
import { ContainerWrapper, GlobalStyles } from "../elements"

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
    <div className="layout">
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContainerWrapper>{children}</ContainerWrapper>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
