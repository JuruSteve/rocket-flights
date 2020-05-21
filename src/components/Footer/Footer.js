import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterContainer>
    <div className="content">
      <h3>
        Courtesy of {""}
        <strong>
          <a
            href="https://api.spacexdata.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Space X Flights API
          </a>
        </strong>
      </h3>
      <p>© {new Date().getFullYear()}</p>
    </div>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  min-height: 20vh;
  max-width: 960;
  background-color: rebeccapurple;
  color: white;
  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.45rem 1.0875rem;
  }
  a {
    text-decoration: none;
    color: #ff8c8c;
  }
`
export default Footer
