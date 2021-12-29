import React, { useEffect, useState } from 'react';

const Pantry = (props) => {

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
        <div>
            
        </div>
    )
}

export default Pantry;
