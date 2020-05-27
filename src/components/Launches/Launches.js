import React, { useEffect } from "react"
import RocketLaunch from "./RocketLaunch"
import styled from "styled-components"
import useLaunchData from "../../hooks/useLaunchData"
import Loader from "react-loader"
import Filter from "../Filter/Filter"

const Launches = () => {
  const { state, fetchLaunches, filters } = useLaunchData()

  useEffect(() => {
    fetchLaunches()
  }, [fetchLaunches])

  return (
    <AllLaunches>
      <Filter filters={filters} />
      <ul className="launch-list">
        {typeof state !== "undefined" && state.filteredLaunches.length > 0 ? (
          state.filteredLaunches.map((launch, i) => {
            return <RocketLaunch key={i} launch={launch}></RocketLaunch>
          })
        ) : (
          <Loader loaded={state.loading} />
        )}
      </ul>
    </AllLaunches>
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
  ul li a {
    text-decoration: none;
    color: black;
  }
`

export default Launches
