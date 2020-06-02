import styled from "styled-components"

export const FlightWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d2d38;
  box-shadow: 0px 1.5px 4px 0.2px #6633994a;
  transition: all 0.3s ease 0s;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    transform: translateY(-5px);
  }

  .img-container img {
    padding: 10px 0;
  }

  figcaption {
    background-color: white;
    padding: 20px;
    width: 100%;
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

export const FlightCard = styled.li`
  grid-column-end: span 4;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`
