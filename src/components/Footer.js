import React from "react"
import { FooterWrapper } from "../elements"

export const Footer = () => (
  <FooterWrapper>
    <div className="content">
      <h3>
        Courtesy of {""}
        <strong>
          <a
            href="https://api.spacexdata.com/v3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Space X Flights API
          </a>
        </strong>
      </h3>
      <p>© {new Date().getFullYear()}</p>
    </div>
  </FooterWrapper>
)
