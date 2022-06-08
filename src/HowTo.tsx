import React from "react";

const HowTo = () => {
    return (
        <section id="howto" className="min-h-screen hero bg-base-200">
            <div className="flex-col justify-between hero-content lg:flex-row">
                <div data-aos="fade-right">
                    <img src="/images/howto.svg" />
                </div>
                <div className="sm:w-4/12">
                    <h2 className="text-3xl font-bold uppercase text-error">
                        How To Apply!
                    </h2>
                    <p className="py-6 leading-8 text-slate-500">
                        When Applying for a traffic permit, there are certain
                        requirement that you must meet that are included in th
                        examination: requirement for professional
                        knowledge,solid establishment, good reputation and
                        financial resources, important to remember to confirm
                        your application for a traffic permit by the company's
                        company signer or CEO
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowTo;
