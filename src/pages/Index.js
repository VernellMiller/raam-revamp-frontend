import React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    });
    
    const loaded = () => {
        return props.pantries.map(pantry => (
            <div key={pantry._id} className="pantry">
                <Link to={`/pantries/${pantry._id}`}>
                    <h1>{pantry.name}</h1>
                </Link>
                <img src={pantry.image} alt={pantry.name}/>
                <h3>{pantry.location}</h3>
            </div>
        ))
    }

    const loading = () => <h1>Loading ...</h1>

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <section>
            <form>
                <input 
                type="text" 
                value={newForm.name} 
                onChange={handleChange}
                placeholder="RAAM"
                name="name"
                />
                <input 
                type="text" 
                value={newForm.name} 
                onChange={handleChange}
                placeholder=""
                name="image"
                />
                <input 
                type="text" 
                value={newForm.name} 
                onChange={handleChange}
                placeholder="Home Grown"
                name="location"
                />
                <input 
                type="submit" 
                value="Create Pantry" 
                />
            </form>
            { props.pantry ? loaded() : loading() }
        </section>
    );
}

export default Index;
