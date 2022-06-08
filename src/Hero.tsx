import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Hero = () => {
    return (
        <div
            data-aos="fade-down"
            className="min-h-[120vh] hero justify-start bg-[url('images/hero.svg')]"
        >
            <div className="w-5/12 text-base-100">
                <h1 className="text-6xl">
                    Your Awesome Traffic permit consultant
                </h1>
                <button className="mt-8 btn btn-error text-base-100">
                    Get Started
                    <span>
                        <ArrowNarrowRightIcon className="w-6 h-6 ml-3" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
