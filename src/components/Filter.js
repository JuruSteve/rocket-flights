import React from "react"
import { navigate } from "gatsby"
import { FilterWrapper } from "../elements"
import { ALL, MOST_RECENT, SUCCESS, FAILURE } from "../reducers"

export const Filter = ({ dispatch, homePage }) => {
  return (
    <FilterWrapper>
      <p>Filter:</p>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate(`${homePage}`)
              dispatch({ type: ALL })
            }}
          >
            All
          </button>
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
          <button
            onClick={() => {
              dispatch({ type: FAILURE })
            }}
          >
            Failed
          </button>
        </li>
      </ul>
    </FilterWrapper>
  )
}
