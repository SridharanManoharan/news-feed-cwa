import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} >
        <Switch>
            <Route exact path="/" component={() =>
                <Redirect to="/landing" />} />
            <Route path="/landing">
                <Landing />
            </Route>  
            {/* <Route path="/error">
                <Error />
            </Route>
            <Route path="/success">
                <SuccessPage />
            </Route>   */}
        </Switch>
    </Router>,
    document.getElementById('news-feed-cwa')
);
