import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const FlightDetailsWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`

export const FlightDetailsContent = styled.div`
  grid-column: 4 / span 8;
  grid-row: 1 / span 5;
  padding: ${props =>
    `${props.theme.spacing.small} ${props.theme.spacing.medium}`};
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
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacing.medium} ${props.theme.spacing.large}`};
  }
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const BackButton = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #2c0354;
  font-size: 20px;
  transition: filter 0.3s ease;
  padding: 10px;
  background: #6633990d;
  border-radius: 3px;
  &:hover,
  &:focus {
    filter: brightness(20%);
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 3px 1px #6633994a;
  padding: 30px 10px 10px 10px;
  margin-bottom: 80px;
  border-radius: 5px;
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
