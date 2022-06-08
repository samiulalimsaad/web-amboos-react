import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import HowTo from "./HowTo";
import Navbar from "./Navbar";
import Truck from "./Navbar/Truck";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
            <Truck />
            <About />
            <HowTo />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
