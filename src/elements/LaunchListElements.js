import styled from "styled-components"

export const LaunchListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  grid-gap: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  ul li a {
    text-decoration: none;
    color: black;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 1.25rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 0.625rem repeat(6, 1fr) 0.625rem;
    grid-gap: 0.625rem;
  }
`
export const LaunchList = styled.ul`
  display: grid;
  grid-column: 2 / span 12;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 2.5rem;
  margin: 0px 0px 20px 0px;
  padding: ${props =>
    `${props.theme.spacing.xLarge} ${props.theme.spacing.xxLarge}`};
  list-style-type: none;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.25rem;
    padding: ${props =>
      `${props.theme.spacing.xSmall} ${props.theme.spacing.small}`};
  }
`
