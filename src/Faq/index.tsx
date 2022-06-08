import React from "react";
import Questions from "./Questions";

const Faq = () => {
    return (
        <section id="faqs" className="p-20">
            <div id="faqs" className="min-h-screen mx-auto hero ">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div data-aos="fade-left">
                        <img src="/images/faqs.png" />
                    </div>
                    <div className="w-4/12">
                        <h2 className="text-3xl font-bold text-error">FAQ</h2>
                        <h4 className="py-6 text-4xl font-semibold leading-normal text-slate-900/70">
                            Questions and Answers on professional traffic
                            permits:
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container px-20 mx-auto">
                <Questions />
            </div>
        </section>
    );
};

export default Faq;
