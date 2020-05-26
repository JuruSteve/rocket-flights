import React from "react"
import styled from "styled-components"

const Filter = ({ filters }) => {
  return (
    <FilterOptions>
      <p>Filters:</p>
      <ul>
        <li>
          <button onClick={filters.filterByAll}>All</button>
        </li>
        <li>
          <button onClick={filters.filterBySuccess}>Success</button>
        </li>
        <li>
          <button onClick={() => filters.filterByFailure()}>Failure</button>
        </li>
        <li>
          <button
            className="most-recent"
            onClick={() => filters.filterByMostRecent()}
          >
            Most Recent
          </button>
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
