import React, { useEffect } from "react"
import { Router, navigate } from "@reach/router"
import FlightDetails from "../components/Launches/FlightDetails"
import Layout from "../components/layout"

const BounceToHome = () => {
  useEffect(() => {
    navigate("/", { replace: true })
  }, [])
  return null
}

const Flight = () => (
  <Layout>
    <Router>
      <FlightDetails path="/flight/:flightName" />
      <BounceToHome default />
    </Router>
  </Layout>
)

export default Flight
