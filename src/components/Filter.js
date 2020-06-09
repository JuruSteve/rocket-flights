import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { FilterWrapper } from "../elements"
import AllLaunches from "../templates/allLaunches"

export const Filter = ({ dispatch }) => {
  return (
    <FilterWrapper>
      <p>Filter by:</p>
      <ul>
        <li>
          <button onClick={() => dispatch({ type: "all" })}>All</button>
        </li>
        <li>
          <button onClick={() => dispatch({ type: "success" })}>Success</button>
        </li>
        <li>
          <button onClick={() => dispatch({ type: "failure" })}>Failure</button>
        </li>
        <li>
          <button
            className="most-recent"
            onClick={() => dispatch({ type: "most-recent" })}
          >
            Most Recent
          </button>
        </li>
      </ul>
    </FilterWrapper>
  )
}
