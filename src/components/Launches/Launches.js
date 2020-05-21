import React, { useEffect, useReducer } from "react"
import RocketLaunch from "./RocketLaunch"
import styled from "styled-components"
import axios from "axios"
import filterReducer from "../../reducers/filterReducer"
import Loader from "react-loader"

import {
  // FILTER_FAILURES,
  // FILTER_MOST_RECENT,
  // FILTER_SUCCESSES,
  FETCH_DATA,
} from "../../actions"

const initialState = {
  launches: [],
  loading: true,
}
const Launches = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState)

  useEffect(() => {
    fetchLaunches()
  }, [])

  const fetchLaunches = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches")
    if (data.length) {
      console.log(data)
      dispatch({ type: FETCH_DATA, payload: { launches: data } })
    }
  }

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

  console.log("state", state)
  return (
    <AllLaunches>
      <ul className="launch-list">
        {state.loading && <Loader />}
        {state.launches.length > 0 &&
          state.launches.map((launch, i) => {
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
