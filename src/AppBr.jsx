import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Professional from "./components/Professional";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";


const AppBr = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Professional />
            <Experience/>
            {/*<Services/>*/}
            <Portfolio/>
            {/*<Testimonials/>*/}
            <Contact/>
            <Footer/>
        </>
    )
}

export default AppBr;