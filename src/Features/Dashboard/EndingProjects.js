import React from 'react'
import { Segment, List, Header, Icon } from 'semantic-ui-react'
import './EndingProjects.css'

export default function EndingProjects() {
    return (
        <Segment>
            <Header as='h3'>
                <Icon name='calendar alternate' />
                <Header.Content>
                    Ending Projects
                </Header.Content>
            </Header>
            <List divided relaxed >
                <List.Item className="content">
                    <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                        <List.Description as='a'>Updated 10 mins ago</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                        <List.Description as='a'>Updated 22 mins ago</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                        <List.Description as='a'>Updated 34 mins ago</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    )
}
