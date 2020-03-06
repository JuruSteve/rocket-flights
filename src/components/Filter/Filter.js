import React from "react"
import styled from "styled-components"

const Filter = ({ launches, filterList }) => {
  const mostRecent = list => {
    let newList = list
      .filter(item => item.upcoming == false)
      .sort((a, b) => {
        let d1 = new Date(a.launch_date_utc)
        let d2 = new Date(b.launch_date_utc)
        return compareDates(d1, d2)
      })
    filterList(newList)
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

  const failures = list => {
    const newList = list.filter(item => item.launch_success !== true)
    filterList(newList)
  }

  return (
    <FilterOptions>
      <p>Filters:</p>
      <ul>
        <li>
          <button>Success</button>
        </li>
        <li>
          <button onClick={() => failures(launches)}>Failure</button>
        </li>
        <li>
          <button onClick={() => mostRecent(launches)}>Most Recent</button>
        </li>
      </ul>
    </FilterOptions>
  )
}

export default Filter

const FilterOptions = styled.div`
  display: flex;
  flex-basis: 1;
  justify-content: space-around;
  p {
    margin: 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    list-style-type: none;
    li {
      margin-left: 2em;
      button {
        background-color: #2c3261;
        color: white;
      }
    }
  }
`
