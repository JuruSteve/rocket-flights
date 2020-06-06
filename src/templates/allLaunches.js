import React from "react"
import { graphql } from "gatsby"
// import useLaunchData from "../hooks/useLaunchData"
import Loader from "react-loader"
import {
  Flight,
  //  Filter,
  Pagination,
} from "../components"
import { LaunchListWrapper, LaunchList } from "../elements"
import Layout from "../components/layout"

const AllLaunches = ({ pageContext, data }) => {
  // const { state, fetchLaunches, filters } = useLaunchData()
  const { currentPage, launchesPerPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === launchesPerPage
  const prevPage = currentPage - 1 <= 1 ? `/` : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const launches = data.allSpacexApiLaunches.edges
  // useEffect(() => {
  //   fetchLaunches(launches)
  // }, [fetchLaunches, launches])

  return (
    <Layout>
      <LaunchListWrapper>
        {/* <Filter filters={filters} /> */}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
        <LaunchList>
          {launches.length > 0 ? (
            launches.map((launch, i) => {
              let launchItem = launch.node
              return <Flight key={i} launch={launchItem}></Flight>
            })
          ) : (
            <Loader loaded={typeof launches !== "undefined"} />
          )}
        </LaunchList>
      </LaunchListWrapper>
    </Layout>
  )
}
export default AllLaunches
export const pageQuery = graphql`
  query AllLaunchesQuery($skip: Int!, $limit: Int!) {
    allSpacexApiLaunches(skip: $skip, limit: $limit) {
      edges {
        node {
          mission_name
          launch_date_local(formatString: "MMMM DD, YYYY")
          launch_success
          links {
            mission_patch_small
          }
        }
      }
    }
  }
`
