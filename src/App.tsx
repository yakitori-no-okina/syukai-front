import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"

import AppHeader from "./components/layouts/AppHeader";
import RecruitmentList from "./containers/Recruitments/RecruitmentList";
import RecruitmentContent from "./containers/Recruitments/RecruitmentDetail";
import Profile from "./containers/Profile";
import EditProfile from "./containers/Profile/edit";
import UserSkill from "./containers/Profile/skill";
import Search from "./containers/Search";

const App: React.VFC = () => (
    <Router>
        <AppHeader/>
        <Switch>
            <Route path="/" component={RecruitmentList} exact />
            <Route path="/recruitment/:id" component={RecruitmentContent} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/profile/:id" component={Profile} exact />
            <Route path="/profile/:id/edit" component={EditProfile} exact />
            <Route path="/profile/:id/skill" component={UserSkill} exact />
        </Switch>
    </Router>
)

export default App;
