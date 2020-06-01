import React from 'react';
import ReactDOM from 'react-dom'
import Projects from '../Projects/Projects';
import Resources from '../Resource/Resources';
import Dashboard from '../Dashboard/Dashboard';
import SkillsList from '../Skills/Skills.js';

const PMT = () => (
    (
        <div>
            <Dashboard />
            <Projects />
            <Resources />
            <SkillsList />
        </div>
    )
)
export default PMT;