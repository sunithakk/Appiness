import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { render } from "react-dom";
import Auth from "./container/Auth/Login";
import RootContainers from "./container/RootContainers";
import UserContext from "./UserContext";
function Index() {
    const [user, setUser] = useState(() => localStorage.getItem("myData"));
    let route = (
        <Switch>
            <Route exact path="/" component={Auth} />

            <Redirect to="/" />
        </Switch>
    );
    if (user) {
        route = (
            <Switch>
                <Route path="/" component={RootContainers} />
            </Switch>
        );
    }
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {route}
        </UserContext.Provider>
    );
}

render(
    <BrowserRouter>
        <Index />
    </BrowserRouter>,

    document.getElementById("root")
);
