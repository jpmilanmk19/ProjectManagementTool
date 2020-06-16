import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Features/Dashboard/Dashboard'
import Projects from '../Features/Projects/Projects'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Container>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/projects" component={Projects} exact={true} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
