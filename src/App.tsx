import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"

import AppHeader from "./containers/commons/layouts/AppHeader";
import AppFooter from "./containers/commons/layouts/AppFooter";
import Home from "./containers/Home";
import RecruitmentList from "./containers/Recruitments/RecruitmentList";
import RecruitmentContent from "./containers/Recruitments/RecruitmentDetail";
import CreateRecruitment from "./containers/Recruitments/create";
import Profile from "./containers/Profile";
import EditProfile from "./containers/Profile/edit";
import UserSkill from "./containers/Profile/skill";
import Search from "./containers/Search";
import UserLogin from "./containers/Account/Login";
import Signup from "./containers/Account/Signup";

const App: React.VFC = () => (
    <Router>
        <AppHeader/>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/recruitment" component={RecruitmentList} exact />
            <Route path="/recruitment/create" component={CreateRecruitment} exact />
            <Route path="/recruitment/:id" component={RecruitmentContent} exact />
            <Route path="/login" component={UserLogin} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/search" component={Search} exact />
            <Route path="/:id" component={Profile} exact />
            <Route path="/:id/edit" component={EditProfile} exact />
            <Route path="/:id/skill" component={UserSkill} exact />
        </Switch>
        <AppFooter/>
    </Router>
)

export default App;
