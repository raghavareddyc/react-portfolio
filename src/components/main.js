import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
        </Switch>
    );
}

export default Main;
