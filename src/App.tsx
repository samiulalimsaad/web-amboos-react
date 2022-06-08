import { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Truck from "./Navbar/Truck";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
            <Truck />
        </>
    );
}

export default App;
