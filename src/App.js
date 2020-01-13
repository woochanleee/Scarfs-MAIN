import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route component={() => <h1>Error</h1>} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;