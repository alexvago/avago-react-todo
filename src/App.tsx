import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Topbar from "./components/topbar";

const App: React.FC = () => {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
