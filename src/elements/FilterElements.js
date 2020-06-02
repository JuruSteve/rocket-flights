import styled from "styled-components"

export const FilterWrapper = styled.div`
  display: flex;
  flex-basis: 1;
  justify-content: space-around;
  align-items: baseline;
  align-self: flex-start;
  margin-left: 17.5%;

  p {
    margin: 0;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    list-style-type: none;
    li {
      margin-left: 2em;
      button {
        background-color: white;
        color: black;
        border-radius: 5px;
        padding: 10px;
      }
    }
  }
`
