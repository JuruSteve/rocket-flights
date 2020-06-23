export const ALL = "all"
export const SUCCESS = "success"
export const FAILURE = "failure"
export const MOST_RECENT = "most-recent"

export const launchReducer = (state, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        filteredLaunches: state.launches.allLaunches.edges,
      }
    case SUCCESS:
      return {
        ...state,
        filteredLaunches: state.launches.success.edges,
      }
    case FAILURE:
      console.log(state.launches.failure.edges)
      return {
        ...state,
        filteredLaunches: state.launches.failure.edges,
      }
    case MOST_RECENT:
      return {
        ...state,
        filteredLaunches: state.launches.mostRecent.edges,
      }
    default:
      return { ...state, filteredLaunches: state.filteredLaunches.edges }
  }
}
