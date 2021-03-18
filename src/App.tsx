import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"


const App: React.VFC = () => (
    <Router>
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
