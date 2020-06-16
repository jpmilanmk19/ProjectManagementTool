import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './OverallStatus.css';
import axios from 'axios';

export default function OverallStatus({overallStatusLoadingToggle}) {
    const [overallStatus,setOverallStatus] =  useState({}) 

    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/jpmilanmk19/ProjectManagementTool/overallStatus')
        .then((response)=>{
            setOverallStatus(response.data)
            overallStatusLoadingToggle(false)
        })
        .catch((error)=>{
            overallStatusLoadingToggle(false)
        })
    },[setOverallStatus])
    return (
        <Segment>
            <Grid divided>
                <Grid.Column width={4}>
                    <div className="content_center">
                        <p>Project Count</p>
                        <h1>{overallStatus.projects}</h1>
                    </div>

                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="content_center">
                        <p>Resource Count</p>
                        <h1>{overallStatus.resources}</h1>
                    </div>

                </Grid.Column>
                <Grid.Column width={4} className="background_color">
                    <div className="content_center">
                       <p> Unallocated Count</p>
                       <h1>{overallStatus.unallocatedCount}</h1>
                    </div>

                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="content_center">
                        <p>Openings</p>
                        <h1>{overallStatus.openings}</h1>
                    </div>

                </Grid.Column>
            </Grid>
        </Segment>
    )
}
