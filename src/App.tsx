import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import HowTo from "./HowTo";
import Navbar from "./Navbar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <HowTo />
            <Faq />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
