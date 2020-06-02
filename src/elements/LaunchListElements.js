import styled from "styled-components"

export const LaunchListWrapper = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  */
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
  .launch-list {
    display: grid;
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, minmax(auto, 60px));
    grid-gap: 40px;
    margin: 0;
    list-style-type: none;
  }
  ul li a {
    text-decoration: none;
    color: black;
  }
`
