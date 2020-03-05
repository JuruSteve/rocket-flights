import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RocketLaunch from './RocketLaunch'
import styled from 'styled-components'

const Launches = ()=>{
    const [allLaunches, setAllLaunches] = useState([])
    useEffect(() => {
        //  api request to get list of launches
        fetchLaunches()
    }, [])
    const fetchLaunches = async ()=>{
        const launchResults = await axios.get('https://api.spacexdata.com/v3/launches')
        setAllLaunches(launchResults.data)
    }
    return (
        <AllLaunches>
            <h1>All Space X Rocket Launches</h1>
            <ul>
            {allLaunches && allLaunches.map((launch,i)=>{
                return <RocketLaunch launch={launch} key={i} />
            })}
            </ul>
        </AllLaunches>
    )
}

const AllLaunches = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    ul {
        margin: 0 auto;
        list-style-type: none;
    }
`



export default Launches;