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
    console.log("rendered")
  }, [fetchLaunches])

  // const fetchLaunches = async () => {
  //   const { data } = await axios.get("https://api.spacexdata.com/v3/launches")
  //   if (data.length) {
  //     dispatch({ type: FETCH_DATA, payload: { launches: data } })
  //   }
  // }

  // const filterByMostRecent = () => {
  //   dispatch({
  //     type: FILTER_MOST_RECENT,
  //   })
  // }
  // const filterByFailure = () => {
  //   dispatch({
  //     type: FILTER_FAILURES,
  //   })
  // }
  // const filterBySuccess = () => {
  //   dispatch({
  //     type: FILTER_SUCCESSES,
  //   })
  // }

  return (
    <AllLaunches>
      <Filter filters={filters} />
      <ul className="launch-list">
        {typeof state !== "undefined" && state.loading && (
          <Loader loaded={state.loading} />
        )}
        {typeof state !== "undefined" &&
          state.filteredLaunches.length > 0 &&
          state.filteredLaunches.map((launch, i) => {
            return <RocketLaunch key={i} launch={launch}></RocketLaunch>
          })}
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
