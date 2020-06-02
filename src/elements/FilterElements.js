import styled from "styled-components"

export const FilterWrapper = styled.div`
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
