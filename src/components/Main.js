import React from "react";
import { Route, Switch } from "react-router-dom";
import Pantry from "../pages/Pantry";
import Show from "../pages/Show";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Pantry />
                </Route>
                <Route path="/pantry/:id" render={(rp) => (
                    <Show {...rp} />
                )} />
            </Switch>
        </main>
    )
}

export default Main;
