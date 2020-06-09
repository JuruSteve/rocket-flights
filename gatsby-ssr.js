import React from "react"
import Theme from "./src/themes/theme"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./src/elements"
import "normalize.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
