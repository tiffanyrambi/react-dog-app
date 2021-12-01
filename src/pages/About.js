import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
    return(
        <>
            <Navigation />
                <div className="bg-success py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">About Page</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Dog application</p>
                </div>
            </div>
        </div>
                <div className="container" style={{height: 30 + 'em'}}>
                    
                    <br/>

                    <h3>App description</h3>
                    <p>This application is used to see different breeds of dogs. You can see the details of each breed and can search the dog breed.</p> <br/>

                    <h3>Student description</h3>
                    <ul>
                        <li><strong>Nama Lengkap:</strong> Tiffany Brenda Rambi</li>
                        <li><strong>NIM:</strong> 105022010038 </li>
                        <li><strong>Program Studi:</strong> Informatika</li>
                    </ul>
                </div>
            <Footer />
        </>
    );
}

export default About;
