import React from "react"
import { FilterWrapper } from "../elements"

export const Filter = ({ filters }) => {
  return (
    <FilterWrapper>
      <p>Filter by:</p>
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
    </FilterWrapper>
  )
}
