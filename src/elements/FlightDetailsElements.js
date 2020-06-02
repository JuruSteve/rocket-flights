import styled from "styled-components"

export const FlightDetailsWrapper = styled.div`
  h1 {
    margin-top: 35px;
  }
  button {
    display: block;
    padding: 2px 30px;
    background-color: lavender;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: black;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 2px 10px 1px rebeccapurple;
  padding: 30px 10px 10px 10px;
`
export const FlightImage = styled.div`
  width: 45%;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  .status-success {
    strong {
      color: green;
    }
  }
  .status-failure {
    strong {
      color: red;
    }
  }
`
