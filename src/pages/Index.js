import React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
    const [newForm, setNewForm] = useState(getNewState());

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

    const handleChange = (event) => {
        setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPantries(newForm)
        setNewForm(getNewState());
    }

    function getNewState() {
        return {
            name: "",
            image: "",
            location: "",
            description: "",
        }
    }

    return (
        <section>
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={newForm.name} 
                onChange={handleChange}
                placeholder="pantry name"
                name="name"
                />
                <input 
                type="url" 
                value={newForm.image} 
                onChange={handleChange}
                placeholder="image url"
                name="image"
                />
                <input 
                type="text" 
                value={newForm.location} 
                onChange={handleChange}
                placeholder="Home Grown"
                name="location"
                />
                <input 
                type="text" 
                value={newForm.description} 
                onChange={handleChange}
                placeholder="description"
                name="description"
                />
                <input 
                type="submit" 
                value="Create Pantry" 
                />
            </form>
            { props.pantries ? loaded() : loading() }
        </section>
    );
}

export default Index;
