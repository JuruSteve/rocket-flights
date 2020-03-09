import moment from "moment"

const filterLaunches = launchList => {
  return launchList.reduce(
    (acc, curr) => {
      // Most recent launches
      if (!curr.upcoming) {
        if (moment(curr.launch_date_utc).isBefore(moment())) {
          acc.mostRecent.push(curr)
        }
      }
      // // Failed launches
      if (!curr.upcoming && !curr.launch_success) acc.failure.push(curr)
      // // Successful launches
      if (!curr.upcoming && curr.launch_success) acc.success.push(curr)
      return acc
    },
    { mostRecent: [], failure: [], success: [] }
  )
}

export const filterReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "MOST_RECENT":
      //   const filtered = filterLaunches([...state])
      //   console.log(filtered)
      //   return
      break
    case "FAILURE":
      return {
        ...state,
      }
    default:
      break
  }
}
