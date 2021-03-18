import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"

import AppHeader from "./components/layouts/AppHeader";


const App: React.VFC = () => (
    <Router>
        <AppHeader/>
        <section className="container mx-auto">
            <Switch>
                <Route path="/" exact>
                    hoge
                </Route>
                <Route path="/:id/profile">
                    profile
                </Route>
            </Switch>
        </section>
    </Router>
)

export default App;
