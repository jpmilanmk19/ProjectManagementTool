import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import './OverallStatus.css'

export default function OverallStatus() {
    return (
        <Segment>
            <Grid divided>
                <Grid.Column width={4}>
                    <div className="content_center">
                        Project Count
                    </div>

                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="content_center">
                        Resource Count
                    </div>

                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="content_center">
                        Unallocated Count
                    </div>

                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="content_center">
                        Openings
                    </div>

                </Grid.Column>
            </Grid>
        </Segment>
    )
}
