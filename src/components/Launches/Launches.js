import React from "react"
import RocketLaunch from "./RocketLaunch"
import styled from "styled-components"
import Filter from "../Filter/Filter"
import { LaunchProvider, LaunchConsumer } from "../../context/LaunchesContext"

const Launches = () => {
  return (
    <LaunchProvider>
      <LaunchConsumer>
        {({ launches }) => (
          <AllLaunches>
            <h1>All Space X Rocket Launches</h1>
            <Filter launches={launches} />
            <ul className="launch-list">
              {launches &&
                launches.map((launch, i) => {
                  return <RocketLaunch launch={launch} key={i} />
                })}
            </ul>
          </AllLaunches>
        )}
      </LaunchConsumer>
    </LaunchProvider>
  )
}

const AllLaunches = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
  .launch-list {
    margin: 0 auto;
    list-style-type: none;
  }
`

export default Launches
