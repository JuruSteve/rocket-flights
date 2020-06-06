import React from "react"
import { FlightWrapper, FlightCard } from "../elements"
import { Link } from "gatsby"

export const Flight = ({ launch }) => {
  return (
    <FlightCard>
      <Link to={`/flight/${launch.mission_name}`} state={{ flight: launch }}>
        <FlightWrapper>
          <div className="img-container">
            <img src={`${launch.links.mission_patch_small}`} alt="" />
          </div>

          <figcaption>
            <h3>{launch.mission_name}</h3>
            <div>
              Mission status:{" "}
              <div
                className={`launch-status ${
                  launch.launch_success ? "launch-success" : "launch-failure"
                }`}
              >
                <p>
                  <strong>
                    {launch.launch_success ? "Success" : "Failure"}
                  </strong>
                </p>
              </div>
            </div>
            <p>
              Launched{" "}
              <strong>
                {new Date(`${launch.launch_date_local}`).toDateString()}
              </strong>
            </p>
          </figcaption>
        </FlightWrapper>
      </Link>
    </FlightCard>
  )
}
