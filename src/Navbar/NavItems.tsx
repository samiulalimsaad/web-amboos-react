import React from "react";

const NavItems = () => {
    return (
        <>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#howto">How To</a>
            </li>
            <li>
                <a href="#faqs">FAQS</a>
            </li>
            <li>
                <a href="#contactus" className="btn btn-error">
                    Contact Us
                </a>
            </li>
        </>
    );
};

export default NavItems;
