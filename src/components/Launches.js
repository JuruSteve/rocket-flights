import React, { useEffect } from "react"
import useLaunchData from "../hooks/useLaunchData"
import Loader from "react-loader"
import { Flight, Filter } from "../components"
import { LaunchListWrapper, LaunchList } from "../elements"

export const Launches = () => {
  const { state, fetchLaunches, filters } = useLaunchData()

  useEffect(() => {
    fetchLaunches()
  }, [fetchLaunches])

  return (
    <LaunchListWrapper>
      <Filter filters={filters} />
      <LaunchList>
        {typeof state !== "undefined" && state.filteredLaunches.length > 0 ? (
          state.filteredLaunches.map((launch, i) => {
            return <Flight key={i} launch={launch}></Flight>
          })
        ) : (
          <Loader loaded={typeof state !== "undefined" && state.loading} />
        )}
      </LaunchList>
    </LaunchListWrapper>
  )
}
