import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"

import AppHeader from "./components/layouts/AppHeader";
import RecruitmentList from "./containers/Recruitments/RecruitmentList";
import RecruitmentContent from "./containers/Recruitments/RecruitmentDetail";
import Profile from "./containers/Profile";
import Search from "./containers/Search";

const App: React.VFC = () => (
    <Router>
        <AppHeader/>
        <section className="container mx-auto">
            <Switch>
                <Route path="/" component={RecruitmentList} exact />
                <Route path="/recruitment/:id" component={RecruitmentContent} />
                <Route path="/search" component={Search} exact />
                <Route path="/profile/:id" component={Profile} />
            </Switch>
        </section>
    </Router>
)

export default App;
