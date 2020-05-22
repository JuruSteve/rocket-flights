import React, { useContext, useReducer, createContext } from "react"
import axios from "axios"

// action types
const FETCH_DATA = "fetch_data"
const FILTER_FAILURES = "filter_failures"
const FILTER_SUCCESSES = "filter_successes"
const FILTER_MOST_RECENT = "filter_most_recent"

const launchesContext = createContext([])

const InitialState = {
  launches: [],
  failed: [],
  success: [],
  mostRecent: [],
}

const compareDates = (d1, d2) => {
  if (d1 > d2) {
    return -1
  } else if (d1 < d2) {
    return 1
  } else {
    return 0
  }
}

const launchReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        launches: payload.launches,
      }
    case FILTER_SUCCESSES:
      console.log("SS______", state)
      const successState =
        state.launches.length &&
        state.launches.filter(
          launch =>
            launch.launch_success !== false && launch.launch_success !== null
        )
      console.log("====success", successState)
      return {
        ...state,
        launches: successState,
      }
    case FILTER_FAILURES:
      console.log("FF______", state.launches, "\n ||||")
      const failureState =
        state.launches.length &&
        state.launches.filter(
          launch =>
            launch.launch_success === false || launch.launch_success === null
        )
      return {
        ...state,
        launches: failureState,
      }
    case FILTER_MOST_RECENT:
      console.log("MR______", payload)
      return {
        ...state,
        launches: [
          ...state.launches.filter(item => item.upcoming !== true),
        ].sort((a, b) => {
          let d1 = new Date(a.launch_date_utc)
          let d2 = new Date(b.launch_date_utc)
          return compareDates(d1, d2)
        }),
      }
    default:
      return InitialState
  }
}

const LaunchesContextProvider = ({ children }) => (
  <launchesContext.Provider value={useReducer(launchReducer, InitialState)}>
    {children}
  </launchesContext.Provider>
)

export const wrapRootElement = ({ element }) => (
  <LaunchesContextProvider>{element}</LaunchesContextProvider>
)

const useLaunchData = () => {
  const [state, dispatch] = useContext(launchesContext)
  console.log("useLD-1-1-1-1", state.launches)
  const filterByMostRecent = () => {
    dispatch({
      type: FILTER_MOST_RECENT,
      // payload: { launches: state.launches },
    })
    // console.log("MOST RECENT", state.launches)
  }
  const filterByFailure = () => {
    dispatch({
      type: FILTER_FAILURES,
      // payload: { launches: state.launches }
    })
    // console.log(
    //   "FAILURE",
    //   state.launches.filter(launch => launch.launch_success !== false)
    // )
  }
  const filterBySuccess = () => {
    dispatch({
      type: FILTER_SUCCESSES,
      //  payload: { launches: state.launches }
    })
  }
  const fetchLaunches = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches")
    dispatch({
      type: FETCH_DATA,
      payload: { launches: data },
    })
  }

  return {
    state,
    filters: {
      filterByMostRecent,
      filterByFailure,
      filterBySuccess,
    },
    fetchLaunches,
  }
}

export default useLaunchData
