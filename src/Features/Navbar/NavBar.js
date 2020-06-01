import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => (
    // <div>
    //     <NavLink to="/" exact={true}>Dashboard</NavLink>
    //     <NavLink to="/projects" >Projects</NavLink>
    //     <NavLink to="/resources" >Resources</NavLink>
    //     <NavLink to="/skills" >Skills</NavLink>
    // </div>

    <div>
        <Menu pointing secondary fixed='top'>
            <Menu.Item as={NavLink}
                name='Dashboard'
                to='/' exact
            />
            <Menu.Item as={NavLink}
                name='Projects'
                to='/projects'
            />
            <Menu.Item as={NavLink}
                name='Resources'
                to='/resources'
            />
            <Menu.Item  as={NavLink}
                name='Skills'
                to='/skills'
            />
        </Menu>
    </div>
)

export default NavBar;