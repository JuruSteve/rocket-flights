import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const RocketLaunch = ({ launch }) => {
  return (
    <li>
      <Link to={`/flight/${launch.mission_name}`} state={{ flight: launch }}>
        <Launch>
          <img src={`${launch.links.mission_patch_small}`} alt="" />
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
            <h6>Details</h6>
          </figcaption>
        </Launch>
      </Link>
    </li>
  )
}

const Launch = styled.figure`
  display: flex;
  justify-content: flex-start;
  background-color: #afb6cb99;
  &:hover {
    box-shadow: 0px 1.5px 4px 0.2px #6633994a;
  }
  figcaption {
    background-color: white;
    width: 60%;
    padding: 2em;
    .launch-status {
      display: inline-block;
    }
    .launch-success {
      color: green;
      font-weight: 400;
      /* width: 20px;
            height: 20px; */
    }
    .launch-failure {
      /* background-color: red; */
      color: red;
      p {
        font-weight: 500;
      }
      /* width: 20px;
            height: 20px; */
    }
  }
`
export default RocketLaunch
