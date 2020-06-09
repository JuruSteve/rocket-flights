import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  FlightDetailsWrapper,
  FlightDetailsContent,
  FlightImage,
  BackButton,
  Details,
  Stats,
} from "../elements"
import SEO from "../components/seo"
import "normalize.css"

const Flight = ({ data }) => {
  const flight = data.spacexApiLaunches
  return (
    <Layout>
      <SEO title={`${flight.mission_name}`} />
      <FlightDetailsWrapper>
        <FlightDetailsContent>
          <BackButton to="/">&larr; Back</BackButton>
          <h1>{flight.mission_name}</h1>
          <h3>{flight.details}</h3>
          <Details className="flightDetails">
            <FlightImage>
              <img
                src={`${flight.links && flight.links.mission_patch_small}`}
                alt="Mission Patch"
              />
            </FlightImage>
            <Stats>
              <p className="launch-year">
                Rocket:
                <strong>
                  {` ${flight.rocket.rocket_name} / ${flight.rocket.rocket_type}`}
                </strong>
              </p>
              <p
                className={`status-${
                  flight.launch_success ? "success" : "failure"
                }`}
              >
                Mission status:
                <strong>
                  {flight.launch_success ? " Success" : " Failure"}
                </strong>
              </p>
              <p className="launch-year">
                Launch Date:
                <strong> {flight.launch_date_local}</strong>
              </p>
              <p className="launch-year">
                Launch Site:
                <strong> {flight.launch_site.site_name_long}</strong>
              </p>
            </Stats>
          </Details>
        </FlightDetailsContent>
      </FlightDetailsWrapper>
    </Layout>
  )
}

export default Flight

export const pageQuery = graphql`
  query($id: String!) {
    spacexApiLaunches(id: { eq: $id }) {
      mission_name
      launch_success
      details
      launch_site {
        site_name_long
      }
      links {
        mission_patch_small
      }
      launch_date_local(formatString: "MMMM DD, YYYY")
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`
