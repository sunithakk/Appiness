import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// import Sidebar from "../components/Layout/SideBar";
import DashBoard from "../container/DashBoard";
// import User from "../container/User";

class RootContainers extends Component {
    state = {
        loading: false,
        opened: true,
        items: []
    };

    render() {
        let getRoutes = null;

        getRoutes = (
            <Switch>
                <Route path="/dashboard" exact component={DashBoard} />
                {/* <Route path="/users" exact component={User} /> */}
            </Switch>
        );
        return <Fragment>{getRoutes}</Fragment>;
    }
}

export default RootContainers;
