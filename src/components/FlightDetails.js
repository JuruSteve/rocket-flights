import React from "react"
import { FlightDetailsWrapper, Details, FlightImage, Stats } from "../elements"
import { Link } from "gatsby"

export const FlightDetails = ({ location }) => {
  const flight = location.state && location.state.flight
  return (
    <div>
      {flight && (
        <FlightDetailsWrapper>
          {/* <button onClick={() => navigate("/")}>Back</button> */}
          <Link to="/">Back</Link>
          <h1>{flight.mission_name}</h1>
          <h3>
            <em>{flight.details}</em>
          </h3>
        </FlightDetailsWrapper>
      )}

      {flight && (
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
              <strong>{flight.launch_success ? " Success" : " Failure"}</strong>
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
      )}
    </div>
  )
}
