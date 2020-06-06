import React from "react"
import {
  FlightDetailsWrapper,
  FlightDetailsContent,
  BackButton,
  Details,
  FlightImage,
  Stats,
} from "../elements"

export const FlightDetails = ({ location }) => {
  const flight = location.state && location.state.flight
  return (
    <FlightDetailsWrapper>
      {flight && (
        <FlightDetailsContent>
          <BackButton to="/">&larr; Back</BackButton>
          <h1>{flight.mission_name}</h1>
          <h3>
            <em>{flight.details}</em>
          </h3>
          <Details className="flightDetails">
            <FlightImage>
              <img
                src={`${flight.links && flight.links.mission_patch}`}
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
                Launch Year:
                <strong> {flight.launch_year}</strong>
              </p>
              <p className="launch-year">
                Launch Site:
                <strong> {flight.launch_site.site_name_long}</strong>
              </p>
            </Stats>
          </Details>
        </FlightDetailsContent>
      )}
    </FlightDetailsWrapper>
  )
}
