import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Hero = () => {
    return (
        <section
            id="hero"
            data-aos="fade-down"
            className="min-h-[120vh] hero justify-start bg-[url('/images/hero.svg')]"
        >
            <div className="w-5/12 text-base-100">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                    Your Awesome Traffic permit consultant
                </h1>
                <button className="flex mt-8 btn btn-error text-base-100">
                    Get Started
                    <span>
                        <ArrowNarrowRightIcon className="w-4 h-4 ml-3 sm:w-6 sm:h-6" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
