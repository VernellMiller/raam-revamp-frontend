import { useState } from 'react';

function Show(props) {
    const id = props.match.params.id;
    const pantries = props.pantries;
    const pantry = pantries.find((p) => p._id === id);

    const[ editForm, setEditForm ] = useState(pantry);

    const handleChange = event => {
        setEditForm(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      }

    const handleSubmit = event => {
        event.preventDefault();
        const{ _id, name, image, location, description} = editForm;
        props.updatePantries({name, image, location, description}, _id);
        props.history.push('/pantry');
    }

    const removePantry = () => {
        props.deletePantries(pantry._id);
        props.history.push('/pantry');
    }

    return (
        <div className='pantry'>
            <h1>{pantry?.name}</h1>
            <img src={pantry?.image} alt={pantry?.name} />
            <h2>{pantry?.location}</h2>
            <h2>{pantry?.description}</h2>
            <button id="delete" onClick={removePantry}>DELETE</button>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={editForm.name}
                onChange={handleChange}
                placeholder="name"
                name="name"
                />
                <input 
                type="text"
                value={editForm.image}
                onChange={handleChange}
                placeholder="image URL"
                name="image"
                />
                <input 
                type="text"
                value={editForm.location}
                onChange={handleChange}
                placeholder="location"
                name="location"
                />
                <input 
                type="text"
                value={editForm.description}
                onChange={handleChange}
                placeholder="description"
                name="description"
                />
                <input type="submit" value="Edit Pantry" />
            </form>
        </div>
    )
}

export default Show;
