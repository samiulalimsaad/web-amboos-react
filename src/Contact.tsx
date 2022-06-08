import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Truck from "./Hero/Truck";

const Contact = () => {
    return (
        <section
            id="contactus"
            className="relative mt-40 w-11/12 min-h-[30rem] rounded-tr-[10rem] hero bg-slate-900"
        >
            <div>
                <div>
                    <div className="absolute left-0 -top-48 w-96">
                        <Truck />
                    </div>
                </div>
                <div className="absolute w-3/12 p-8 font-semibold leading-7 border-l-8 rounded-lg left-52 top-20 border-error text-base-100">
                    <p>
                        We provide traffic management consultants so you get
                        started quickly. COntact us for a quote today!
                    </p>
                </div>
                <div className="absolute -top-20 right-40">
                    <div className="p-10 shadow-xl max-h-max card w-96 bg-base-100">
                        <div className="form-control">
                            <label htmlFor="name">Email</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Type here"
                                className="w-full max-w-xs input input-bordered input-error"
                            />
                        </div>
                        <div className="mt-8 form-control">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Type here"
                                className="w-full max-w-xs input input-bordered input-error"
                            />
                        </div>
                        <div>
                            <button className="flex mt-8 btn btn-error text-base-100">
                                Get Started
                                <span>
                                    <ArrowNarrowRightIcon className="w-4 h-4 ml-3 sm:w-6 sm:h-6" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* nav */}
            <div className="container flex justify-between w-full px-40 mx-auto mt-72">
                <a
                    href="#hero"
                    className="text-xl font-black uppercase btn btn-ghost text-base-100"
                >
                    Trafico.
                </a>
                <ul className="gap-12 p-0 font-bold uppercase menu menu-horizontal text-base-100">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#howto">How To</a>
                    </li>
                    <li>
                        <a href="#faqs">FAQS</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
