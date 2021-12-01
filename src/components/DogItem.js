import React from "react";
import { Link } from "react-router-dom";

const DogItem = (props) => {
        const posterUrl = "https://cdn2.thedogapi.com/images/";
        const endOfLink = ".jpg";
    return(
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={posterUrl+props.dog.reference_image_id+endOfLink} alt={props.dog.name} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.dog.name}</h5>
                        {props.dog.life_span}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.dog.id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogItem;