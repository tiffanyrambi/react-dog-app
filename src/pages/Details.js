import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DogDetails from "../components/DogDetails";

const Details = () => {
    const [dog, setDog] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.thedogapi.com/v1/breeds?x-api-key=3d8a62a2-a143-47b7-b93f-d6d36395cbdb&q=${params.dogId}`)
        .then(response => response.json())
        .then(data => setDog(data)); 
    }, 

    // eslint-disable-next-line
    []);


    return(
        <>
            <Navigation/>
            <DogDetails dog={dog} />
            <Footer/>
        </>
    );
}

export default Details;