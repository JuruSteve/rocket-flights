import React, { useReducer } from "react"
import { graphql } from "gatsby"
import Loader from "react-loader"
import Layout from "../components/layout"
import { Flight, Filter, Pagination } from "../components"
import { LaunchListWrapper, LaunchList } from "../elements"
import { launchReducer } from "../reducers"
import SEO from "../components/seo"
import "normalize.css"

const AllLaunches = ({ pageContext, data }) => {
  const { currentPage, launchesPerPage } = pageContext
  const [state, dispatch] = useReducer(launchReducer, {
    launches: data,
    filteredLaunches: data.allLaunches.edges,
  })
  let launches = state.filteredLaunches

  const isFirst = currentPage === 1
  const isLast =
    currentPage === launchesPerPage || launches.length < launchesPerPage
  const prevPage = currentPage - 1 <= 1 ? `/` : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Launches" />
      <LaunchListWrapper>
        <Filter dispatch={dispatch} />
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
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </LaunchListWrapper>
    </Layout>
  )
}
export default AllLaunches
export const pageQuery = graphql`
  query AllLaunchesQuery($skip: Int!, $limit: Int!) {
    allLaunches: allSpacexApiLaunches(skip: $skip, limit: $limit) {
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
    success: allSpacexApiLaunches(
      skip: $skip
      limit: $limit
      filter: { launch_success: { eq: true } }
    ) {
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
    failure: allSpacexApiLaunches(
      skip: $skip
      limit: $limit
      filter: { launch_success: { eq: false } }
    ) {
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
    mostRecent: allSpacexApiLaunches(
      skip: $skip
      limit: $limit
      filter: { upcoming: { eq: false } }
      sort: { fields: launch_date_local, order: DESC }
    ) {
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
