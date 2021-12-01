import React, { useState, useEffect } from "react";
import DogItem from "./DogItem";


const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        //hit the endpoint of TheDogAPI breed
        fetch('https://api.thedogapi.com/v1/breeds?x-api-key=3d8a62a2-a143-47b7-b93f-d6d36395cbdb')
        .then(response => response.json())
        .then(data => setDogs(data));

        //eslint-disable-next-line
    }, []);

    const handleChange = e => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        //hit the enpoint of TheDogAPI to search a breed
        fetch(`https://api.thedogapi.com/v1/breeds/search?x-api-key=3d8a62a2-a143-47b7-b93f-d6d36395cbdb&q=${text}`)
        .then(response => response.json())
        .then(data => setDogs(data));

        setText('');
    }

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Dog</h2>
                    
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={text}/>
                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-5">
                    { dogs.map((dog) => <DogItem key={dog.id} dog={dog} />) }
                </div>
            </div>
        </section>
    );
}

export default Dogs;