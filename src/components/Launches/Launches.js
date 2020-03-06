import React, { useState, useEffect } from "react"
import axios from "axios"
import RocketLaunch from "./RocketLaunch"
import styled from "styled-components"
import Filter from "../Filter/Filter"

const Launches = () => {
  const [allLaunches, setAllLaunches] = useState([])
  const [filteredState, setFilteredState] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  useEffect(() => {
    //  api request to get list of launches
    fetchLaunches()
  }, [])
  const fetchLaunches = async () => {
    const launchResults = await axios.get(
      "https://api.spacexdata.com/v3/launches"
    )
    console.log(launchResults)
    setAllLaunches(launchResults.data)
  }
  return (
    <AllLaunches>
      <h1>All Space X Rocket Launches</h1>
      <Filter
        launches={isFiltered ? filteredState : allLaunches}
        filterList={isFiltered ? setFilteredState : setAllLaunches}
      />
      <ul className="launch-list">
        {isFiltered
          ? filteredState
          : allLaunches &&
            allLaunches.map((launch, i) => {
              return <RocketLaunch launch={launch} key={i} />
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
`

export default Launches
