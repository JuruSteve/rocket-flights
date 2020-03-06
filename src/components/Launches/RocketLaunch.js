import React from "react"
import styled from "styled-components"

const RocketLaunch = ({ launch }) => {
  return (
    <li>
      <Launch>
        <img src={`${launch.links.mission_patch_small}`} alt="" />
        {/* <br /> */}
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
                <strong>{launch.launch_success ? "Success" : "Failure"}</strong>
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
    </li>
  )
}

const Launch = styled.figure`
  display: flex;
  justify-content: flex-start;
  background-color: #afb6cb99;
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
