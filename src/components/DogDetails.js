import React from "react";
import { Link } from "react-router-dom";

const DogDetails = (props) => {
    const posterUrl = "https://cdn2.thedogapi.com/images/";
    const endOfLink = ".jpg";

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={posterUrl+props.dog.reference_image_id+endOfLink} alt={props.dog.name} />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">Temperament: {props.dog.temperament}</div>
                        <h1 className="display-5 fw-bolder">Name: {props.dog.name}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$45.00</span>
                            <span>$40.00</span>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                <i className="bi-cart-fill me-1"></i>
                                Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DogDetails;