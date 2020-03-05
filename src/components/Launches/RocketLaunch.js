import React from 'react'
import styled from 'styled-components'

const RocketLaunch = ({launch}) => {
    return (
        <li>
            <Launch>
                <img src={`${launch.links.mission_patch_small}`} alt=""/>
                {/* <br /> */}
                <figcaption>
                    <h3>{launch.mission_name}</h3>
                    <div>Success: <div className={`launch-status ${launch.launch_success ?'lauch-success' : 'launch-failure'}`}></div></div>
                    <p>Launched in <strong>{launch.launch_year}</strong></p>
                    <h6>Details</h6>
                </figcaption>
            </Launch>
        </li>
    )
}

const Launch = styled.figure`
    display: flex;
    justify-content: flex-start;
    background-color: #afb6cb99;
    figcaption {
        background-color: white;
        width: 60%;
        padding: 2em;
        .launch-status {
        display: inline-block;
        };
        .launch-success {
            background-color: green;
            width: 20px;
            height: 20px;
        }
        .launch-failure {
            background-color: red;
            width: 20px;
            height: 20px;
        }
    }

`
export default RocketLaunch
