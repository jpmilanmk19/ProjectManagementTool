import React from 'react'
import OverallStatus from './OverallStatus'
import EndingProjects from './EndingProjects'

export default function Dashboard() {
    return (
        <div>
            <OverallStatus />
            <EndingProjects />
        </div>
    )
}
