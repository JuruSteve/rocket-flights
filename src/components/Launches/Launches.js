import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Loader from "react-loader"
import Filter from "../Filter/Filter"
import RocketLaunch from "./RocketLaunch"
import useLaunchData from "../../hooks/useLaunchData"

const Launches = () => {
  const { filteredLaunches, fetchLaunches, loading, filters } = useLaunchData()
  const [state, setState] = useState([])
  useEffect(() => {
    fetchLaunches()
  }, [fetchLaunches])

  useEffect(() => {
    setState(filteredLaunches)
  }, [filteredLaunches])

  return (
    <AllLaunches>
      <Filter filters={filters} />
      <ul className="launch-list">
        {console.log("filteredLaunches in render", filteredLaunches)}
        {state && state.length > 0 ? (
          state.map((launch, i) => {
            return <RocketLaunch key={i} launch={launch}></RocketLaunch>
          })
        ) : (
          <Loader loaded={loading} />
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
