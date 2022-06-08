import { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
        </>
    );
}

export default App;
