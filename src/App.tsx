import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Topbar from "./components/topbar";

const client = new ApolloClient({
    // TODO get from config file
    uri: 'http://192.168.1.163:3030/graphql',
    cache: new InMemoryCache()
});


const App: React.FC = () => {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Topbar/>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/" component={Home}>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ApolloProvider>
        </div>
    );
}

export default App;
