import { useState, useEffect } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Pantry from "../pages/Pantry";
import Show from "../pages/Show";
import Index from "../pages/Index";

const Main = () => {
    const [ pantries, setPantries ] = useState(null);


    const PANTRY_BASE_URL = "https://raam-test-api.herokuapp.com/pantry/";

    const getPantries = async () => {
        // const data = await fetch(BASE_URL).then(Response => Response.json());
        const Response = await fetch(PANTRY_BASE_URL);
        const data = await Response.json();
        setPantries(data);
    };

    const createPantries = async (pantry) => {
        await fetch(PANTRY_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(pantry)
        });
        getPantries();
    };

    useEffect(() => getPantries(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index pantries={pantries} createPantries={createPantries} />
                </Route>
                <Route path="/pantry/:id" render={(rp) => (
                    <Show {...rp} />
                )} />
            </Switch>
        </main>
    )
}

export default Main;
