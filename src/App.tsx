import React, {useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./tailwind.output.css"
import "./App.css"
import { UserContext } from "./providers/AuthProvider";


import AppHeader from "./containers/commons/layouts/AppHeader";
import AppGuestHeader from "./containers/commons/layouts/AppGuestHeader";
import AppFooter from "./containers/commons/layouts/AppFooter";
import Home from "./containers/Home";
import RecruitmentList from "./containers/Recruitments/RecruitmentList";
import RecruitmentContent from "./containers/Recruitments/RecruitmentDetail";
import CreateRecruitment from "./containers/Recruitments/RecruitmentCreate";
import Profile from "./containers/Profile";
import EditProfile from "./containers/Profile/ProfileEdit";
import UserSkill from "./containers/Profile/ProfileSkill";
import UserLogin from "./containers/Account/Login";
import Signup from "./containers/Account/Signup";
import Search from "./containers/Search";

const App: React.VFC = () => {
    const { userInfo } = useContext(UserContext)
    return userInfo ? (
    <Router forceRefresh>
        <AppHeader/>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/recruitment" component={RecruitmentList} exact />
            <Route path="/recruitment/create" component={CreateRecruitment} exact />
            <Route path="/recruitment/:id" component={RecruitmentContent} exact />
            <Route path="/login" component={UserLogin} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/search" component={Search} />
            <Route path="/:id" component={Profile} exact />
            <Route path="/:id/edit" component={EditProfile} exact />
            <Route path="/:id/skill" component={UserSkill} exact />
            <Redirect to="/" exact />
        </Switch>
        <AppFooter/>
    </Router>
) : (
    <>
        <Router>
            <AppGuestHeader />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={UserLogin} exact />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
    </>
    )
}

export default App;
