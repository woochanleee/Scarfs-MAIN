import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components';
import { AuthProvider, AuthConsumer } from './context/Auth';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <AuthConsumer>
                        {
                            ({ state, actions }) => <Route path="/" render={() => <Main state={state} actions={actions} />} />
                        }
                    </AuthConsumer>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default App;