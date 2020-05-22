import {
  FILTER_FAILURES,
  FILTER_MOST_RECENT,
  FILTER_SUCCESSES,
  FETCH_DATA,
} from "../actions/index"

const compareDates = (d1, d2) => {
  if (d1 > d2) {
    return -1
  } else if (d1 < d2) {
    return 1
  } else {
    return 0
  }
}

export default (state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        launches: payload ? payload.launches : state.launches,
        loading: false,
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
      return state
  }
}
