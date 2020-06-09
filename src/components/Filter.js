import React from "react"
import { FilterWrapper } from "../elements"
import { ALL, MOST_RECENT, SUCCESS, FAILURE } from "../reducers"
export const Filter = ({ dispatch }) => {
  return (
    <FilterWrapper>
      <p>Filter:</p>
      <ul>
        <li>
          <button onClick={() => dispatch({ type: ALL })}>All</button>
        </li>
        <li>
          <button onClick={() => dispatch({ type: SUCCESS })}>Success</button>
        </li>
        <li>
          <button
            className="most-recent"
            onClick={() => dispatch({ type: MOST_RECENT })}
          >
            Most Recent
          </button>
        </li>
        <li>
          <button onClick={() => dispatch({ type: FAILURE })}>Failed</button>
        </li>
      </ul>
    </FilterWrapper>
  )
}
