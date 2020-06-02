import React, { useEffect } from "react"
import { Router, navigate } from "@reach/router"
import { FlightDetails } from "../components"
import Layout from "../components/Layout"

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
