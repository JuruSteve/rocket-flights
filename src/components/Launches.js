import React, { useEffect } from "react"
import useLaunchData from "../hooks/useLaunchData"
import Loader from "react-loader"
import {
  Flight,
  Filter,
  // Pagination
} from "../components"
import { LaunchListWrapper, LaunchList } from "../elements"

export const Launches = ({ pageContext }) => {
  const { state, fetchLaunches, filters } = useLaunchData()
  // const itemsPerPage = 12
  // const totalPages =
  //   state !== "undefined" && Math.ceil(state.launches.length / itemsPerPage)
  // let skip, limit,
  //  currentPage, isFirst, isLast, prevPage, nextPage

  // if (state !== "undefined") {
  //   Array.from({ length: totalPages }).forEach((_, i) => {
  //     skip = i * itemsPerPage
  //     limit = itemsPerPage
  //     currentPage = i + 1
  //     isFirst = currentPage === 1
  //     isLast = currentPage === totalPages
  //     prevPage = currentPage - 1 === 1 ? `/` : `/${currentPage - 1}`
  //     nextPage = `/${currentPage + 1}`
  //   })
  // }

  useEffect(() => {
    fetchLaunches()
  }, [fetchLaunches])

  return (
    <LaunchListWrapper>
      <Filter filters={filters} />
      {/* <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      /> */}
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
