import React, { useReducer } from "react"
import { graphql } from "gatsby"
import Loader from "react-loader"
import { Flight, Filter, Pagination } from "../components"
import { LaunchListWrapper, LaunchList } from "../elements"
import Layout from "../components/layout"

function reducer(state, action) {
  switch (action.type) {
    case "all":
      return {
        ...state,
        filteredLaunches: state.launches.allLaunches.edges,
      }
    case "success":
      return {
        ...state,
        filteredLaunches: state.launches.success.edges,
      }
    case "failure":
      return {
        ...state,
        filteredLaunches: state.launches.failure.edges,
      }
    case "most-recent":
      return {
        ...state,
        filteredLaunches: state.launches.mostRecent.edges,
      }
    default:
      return { ...state, filteredLaunches: state.filteredLaunches.edges }
  }
}

const AllLaunches = ({ pageContext, data }) => {
  const { currentPage, launchesPerPage } = pageContext
  const [state, dispatch] = useReducer(reducer, {
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
      <LaunchListWrapper>
        <Filter dispatch={dispatch} />
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
        <LaunchList>
          {launches ? (
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
