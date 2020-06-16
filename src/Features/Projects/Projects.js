import React from 'react'
import { Segment, Button, Header, Container, Grid } from 'semantic-ui-react'

export default function Projects() {
    return (
        <Segment clearing>
            <Grid>
                <Grid.Column width={12}>
                    <Header as="h1">
                        <Header.Content>
                            Projects
                        </Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={4}>
                <Button primary className="pull_right" floated="right">Add Project</Button>
                </Grid.Column>
            </Grid>

        </Segment>
    )
}
