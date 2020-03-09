import React, { useReducer } from "react"
import styled from "styled-components"
import { LaunchConsumer } from "../../context/LaunchesContext"
import { filterReducer } from "../../reducers/filterReducer"

// TODO: Figure out how to use the reducer with filter actions!!!!!!!!!!!!!!
// +++++++++++++++++++++++++++++++++++++
const Filter = ({ launches }) => {
  const [state, dispatch] = useReducer(filterReducer, launches)
  return (
    <LaunchConsumer>
      {({ launches }) => (
        <FilterOptions>
          <p>Filters:</p>
          <ul>
            <li>
              <button>Success</button>
            </li>
            <li>
              <button
              // onClick={() => dispatch({ type: "FAILURE", payload: launches })}
              >
                Failure
              </button>
            </li>
            <li>
              <button
                className="most-recent"
                onClick={() => dispatch({ type: "MOST_RECENT" })}
              >
                Most Recent
              </button>
            </li>
          </ul>
        </FilterOptions>
      )}
    </LaunchConsumer>
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
