import React, { useState, useEffect } from 'react'
import OverallStatus from './OverallStatus'
import EndingProjects from './EndingProjects'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

export default function Dashboard() {

    const [loading, setloading] = useState(true)
    const [overallStatusLoading, setoverallStatusLoading] = useState(true)
    const [projectEndingLoadingStatus, setprojectEndingLoadingStatus] = useState(true)
    const overallStatusLoadingToggle = (loadingStatus)=>{
        setoverallStatusLoading(loadingStatus)
    }

    const projectEndingLoadingStatusToggle = (loadingStatus)=>{
        setprojectEndingLoadingStatus(loadingStatus)
    }

    useEffect(() => {
        if(overallStatusLoading === false && projectEndingLoadingStatus === false){
            setloading(false)
        }
        else{
            setloading(true)
        }

    }, [overallStatusLoadingToggle,projectEndingLoadingStatusToggle,overallStatusLoading,projectEndingLoadingStatus])

    return (
        <div>
            <Dimmer active={loading} inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            <div>
                <OverallStatus overallStatusLoadingToggle={overallStatusLoadingToggle} />
                <EndingProjects projectEndingLoadingStatusToggle={projectEndingLoadingStatusToggle} />
            </div>
        </div>
    )
}
