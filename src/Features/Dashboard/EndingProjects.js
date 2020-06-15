import React, { useEffect, useState } from 'react'
import { Segment, List, Header, Icon } from 'semantic-ui-react'
import './EndingProjects.css'
import axios from 'axios'

export default function EndingProjects() {
    const [endingProjects, setendingProjects] = useState([])

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/jpmilanmk19/ProjectManagementTool/endingProjects')
            .then((response) => {
                setendingProjects(response.data)
            })
            .catch((error) => {

            })
    }, [])
    return (
        <Segment>
            <Header as='h3'>
                <Icon name='calendar alternate' />
                <Header.Content>
                    Ending Projects
                </Header.Content>
            </Header>
            <List divided relaxed >
                {endingProjects.map(endingProject => (
                    <List.Item key={endingProject.projectId} className="content">
                        <List.Content>
                            <List.Header as='a'>{endingProject.projectName}</List.Header>
                            <List.Description as='a'>{endingProject.description}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </Segment>
    )
}