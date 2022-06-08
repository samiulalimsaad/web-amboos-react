import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
    return (
        <header className="fixed top-0 py-8 bg-transparent navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <NavItems />
                    </ul>
                </div>
                <a
                    href="#hero"
                    className="text-xl font-black uppercase btn btn-ghost text-base-100"
                >
                    Trafico
                </a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-12 p-0 font-bold uppercase menu menu-horizontal text-base-100">
                    <NavItems />
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
