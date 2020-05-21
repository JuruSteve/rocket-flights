import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"

const FlightDetails = ({ location }) => {
  const flight = location.state && location.state.flight
  return (
    <div>
      {flight && (
        <MissionSummary>
          <button onClick={() => navigate("/")}>Back</button>
          <h1>{flight.mission_name}</h1>
          <h3>
            <em>{flight.details}</em>
          </h3>
        </MissionSummary>
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

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 2px 10px 1px rebeccapurple;
  padding: 30px 10px 10px 10px;
`
const FlightImage = styled.div`
  width: 45%;
`

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  .status-success {
    strong {
      color: green;
    }
  }
  .status-failure {
    strong {
      color: red;
    }
  }
`
const MissionSummary = styled.div`
  h1 {
    margin-top: 35px;
  }
  button {
    display: block;
    padding: 2px 30px;
    background-color: lavender;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: black;
  }
`
export default FlightDetails
