import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Professional from "../components/Professional";

export default function Home() {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Professional/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    );
}
