import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Dogs from "../components/Dogs";
import Footer from "../components/Footer";
const Home = () => {
    return(
        <>
        <Navigation />
        <Header />
        <Dogs />
        <Footer />
        </>
    );
}

export default Home;