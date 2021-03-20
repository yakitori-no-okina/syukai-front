import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"

import AppHeader from "./components/layouts/AppHeader";
import RecruitmentList from "./containers/Recruitments/RecruitmentList";
import RecruitmentContent from "./containers/Recruitments/RecruitmentDetail";
import ProfileContent from "./containers/Profile/Profile";

const App: React.VFC = () => (
    <Router>
        <AppHeader/>
        <section className="container mx-auto">
            <Switch>
                <Route path="/" exact>
                    home
                </Route>
                <Route path="/recruitment" component={RecruitmentList} exact/>
                <Route path="/recruitment/:id" component={RecruitmentContent} />
                <Route path="/profile/:id" component={ProfileContent} />
            </Switch>
        </section>
    </Router>
)

export default App;
