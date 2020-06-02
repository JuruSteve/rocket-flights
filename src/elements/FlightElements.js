import styled from "styled-components"

export const LaunchWrapper = styled.figure`
  display: flex;
  justify-content: flex-start;
  background-color: #afb6cb99;
  &:hover {
    box-shadow: 0px 1.5px 4px 0.2px #6633994a;
  }
  figcaption {
    background-color: white;
    width: 60%;
    padding: 2em;
    .launch-status {
      display: inline-block;
    }
    .launch-success {
      color: green;
      font-weight: 400;
      /* width: 20px;
            height: 20px; */
    }
    .launch-failure {
      /* background-color: red; */
      color: red;
      p {
        font-weight: 500;
      }
      /* width: 20px;
            height: 20px; */
    }
  }
`
