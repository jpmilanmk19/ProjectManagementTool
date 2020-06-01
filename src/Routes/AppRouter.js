import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Features/Dashboard/Dashboard';
import Projects from '../Features/Projects/Projects';
import Resources from '../Features/Resource/Resources';
import SkillsList from '../Features/Skills/Skills';
import NavBar from '../Features/Navbar/NavBar';
import { Container } from 'semantic-ui-react';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Container style={{marginTop:'5em'}}>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/skills" component={SkillsList} />
                </Switch>
            </Container>
        </div>
    </BrowserRouter>
)

export default AppRouter;