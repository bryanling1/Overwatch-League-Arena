import React from 'react';
import { createGlobalStyle} from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {TeamTypes} from '../types';
import Display from './pages/display';

const App = () =>{
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Route path="/home">
                    <Display type={TeamTypes.home}/>
                </Route>
                <Route path="/away">
                    <Display type={TeamTypes.away}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        min-height: 100vh;
        height: 100vh;
        margin: 0;
        min-width: 100%;
    }
`;
