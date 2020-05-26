import React, {
  useContext,
  useReducer,
  createContext,
  useCallback,
} from "react"
import axios from "axios"

// action types
const FETCH_DATA = "fetch_data"
const FILTER_FAILURES = "filter_failures"
const FILTER_SUCCESSES = "filter_successes"
const FILTER_MOST_RECENT = "filter_most_recent"
const FILTER_ALL = "filter_all"

const launchesContext = createContext([])

const InitialState = {
  launches: [],
  filteredLaunches: [],
  loading: true,
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

const launchReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        launches: payload.launches,
        filteredLaunches: payload.launches,
        loading: payload.loading,
      }
    case FILTER_SUCCESSES:
      const successState =
        state.launches.length &&
        state.launches.filter(
          launch =>
            launch.launch_success !== false && launch.launch_success !== null
        )
      return {
        ...state,
        filteredLaunches: successState,
      }
    case FILTER_FAILURES:
      const failureState =
        state.launches.length &&
        state.launches.filter(
          launch =>
            launch.launch_success === false || launch.launch_success === null
        )
      return {
        ...state,
        filteredLaunches: failureState,
      }
    case FILTER_MOST_RECENT:
      return {
        ...state,
        filteredLaunches: [
          ...state.launches.filter(item => item.upcoming !== true),
        ].sort((a, b) => {
          let d1 = new Date(a.launch_date_utc)
          let d2 = new Date(b.launch_date_utc)
          return compareDates(d1, d2)
        }),
      }
    case FILTER_ALL:
      return {
        ...state,
        filteredLaunches: payload.launches,
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
  const filterByAll = () => {
    dispatch({ type: FILTER_ALL, payload: { launches: state.launches } })
  }

  // useCallback to prevent uncessary renders based on callback function identity
  const fetchLaunches = useCallback(async () => {
    const res = await axios
      .get("https://api.spacexdata.com/v3/launches")
      .catch(err => {
        console.log("Error fetching launches", err)
      })
    if (res && res.data) {
      dispatch({
        type: FETCH_DATA,
        payload: { launches: res.data, loading: false },
      })
    }
  }, [dispatch])

  return {
    filteredLaunches: state.filteredLaunches,
    filters: {
      filterBySuccess,
      filterByMostRecent,
      filterByFailure,
      filterByAll,
    },
    fetchLaunches,
  }
}

export default useLaunchData
