import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const { Provider, Consumer } = createContext({
  launches: [],
  mostRecent: null,
  failure: null,
})

const LaunchProvider = props => {
  const [launches, setLaunches] = useState([])
  const [filter, setFilter] = useState(false)

  const [allLaunches, setAllLaunches] = useState([])

  useEffect(() => {
    //  api request to get list of launches
    fetchLaunches()
  }, [])
  const fetchLaunches = async () => {
    const launchResults = await axios.get(
      "https://api.spacexdata.com/v3/launches"
    )
    setAllLaunches(launchResults.data)
  }

  const filterByMostRecent = (launches, filter) => {
    if (filter) {
      launches
        .filter(item => item.upcoming === false)
        .sort((a, b) => {
          let d1 = new Date(a.launch_date_utc)
          let d2 = new Date(b.launch_date_utc)
          return compareDates(d1, d2)
        })
    }
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

  const filterByFailed = (lanches, filter) => {}

  return (
    <Provider
      value={{
        launches: [...allLaunches],
      }}
    >
      {props.children}
    </Provider>
  )
}

export { LaunchProvider, Consumer as LaunchConsumer }
