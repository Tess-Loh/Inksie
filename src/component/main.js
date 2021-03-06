import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Shop from './shop';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)

export default Main;