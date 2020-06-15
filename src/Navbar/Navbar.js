import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'

export default function Navbar() {
    return (
        <Menu secondary className="menu_bar">
            <Menu.Menu position="right">
                <Menu.Item
                    name='Dashboard'
                    as={NavLink}
                    to="/" exact
                />
                <Menu.Item
                    name='Projects'
                    as={NavLink}
                    to="/projects"
                />
                <Menu.Item
                    name='Resources'
                    as={NavLink}
                    to="/resources"
                // style={"font-weight:bold;"}
                />
                <Menu.Item 
                    name="Profile"
                    as={NavLink}
                    to="/profile"
                />
            </Menu.Menu>
        </Menu>
    )
}
