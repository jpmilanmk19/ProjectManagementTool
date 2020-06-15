import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Features/Dashboard/Dashboard'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Container>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
