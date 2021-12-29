import React, { useEffect, useState } from 'react';

const Food = (props) => {

    const [ foods, setFoods ] = useState(null);

    const FOOD_BASE_URL = "https://raam-test-api.herokuapp.com/food/";

    const getFoods = async () => {
        // const data = await fetch(BASE_URL).then(Response => Response.json());
        const Response = await fetch(BASE_URL);
        const data = await Response.json();
        setFoods(data);
    };

    const createFoods = async (food) => {
        await fetch(FOOD_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(food)
        });
        getFoods();
    };

    useEffect(() => getFoods(), []);

    return (
        <div>
            
        </div>
    )
}

export default Food
