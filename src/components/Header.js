import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2d2d38`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1175,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#48D1CC`,
            textDecoration: `none`,
            fontSize: `1.5rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
