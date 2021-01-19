import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './components/page/landing/landing.page';
import ErrorPage from './components/page/error/error.page';


ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} >
        <Switch>
            <Route exact path="/" component={() =>
                <Redirect to="/landing" />} />
            <Route path="/landing">
                <LandingPage />
            </Route>  
            <Route path="/error">
                <ErrorPage />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('news-feed-cwa')
);
