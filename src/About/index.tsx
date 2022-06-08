import React from "react";

const About = () => {
    return (
        <section id="about" className="container min-h-screen mx-auto hero">
            <div className="flex-col justify-between hero-content lg:flex-row-reverse">
                <div data-aos="fade-left">
                    <img src="/images/about.png" />
                </div>
                <div className="w-4/12">
                    <h2 className="text-3xl font-bold text-error">About Us</h2>
                    <p className="py-6 leading-8 ">
                        The Occupational traffic permit is one of the most
                        important things in the company when carrying out
                        freight transport. in fact, it is prerequisite for doing
                        business traffic at all
                    </p>
                    <div className="p-8 font-semibold leading-7 bg-red-200 border-l-8 rounded-lg border-error text-error-content">
                        <p>
                            How do you do when you need to obtain a commercial
                            traffic permit for freight transport to your
                            business?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
