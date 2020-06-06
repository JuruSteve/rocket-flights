import styled from "styled-components"

export const FilterWrapper = styled.div`
  display: flex;
  flex-basis: 1;
  justify-content: space-around;
  align-items: baseline;

  p {
    margin: 0;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    list-style-type: none;
    @media ${props => props.theme.breakpoints.mobile} {
      justify-content: center;
    }
    li {
      margin-left: 2em;
      @media ${props => props.theme.breakpoints.mobile} {
        margin: 0;
        padding: 10px;
      }
      @media ${props => props.theme.breakpoints.tablet} {
        margin: 0;
        padding: 10px;
      }
      button {
        background-color: white;
        color: black;
        border-radius: 5px;
        padding: 10px;
        @media ${props => props.theme.breakpoints.mobile} {
          padding: 5px;
        }
        @media ${props => props.theme.breakpoints.tablet} {
          padding: 5px;
        }
      }
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`
