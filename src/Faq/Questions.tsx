import { PlusIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [limit, setLimit] = useState(4);

    useEffect(() => {
        fetch("https://hook.integromat.com/syyhp9cj3ikey0hhi089wb3xjdy5d9s6")
            .then((res) => res.json())
            .then(({ response }) => setQuestions(response))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-2">
                {questions
                    ?.slice(0, limit)
                    ?.map((v: { title: string; Message: string }) => (
                        <div
                            key={v.title}
                            tabIndex={0}
                            className="border collapse collapse-plus border-base-300 bg-base-100 rounded-box"
                        >
                            <div className="text-xl font-medium collapse-title">
                                {v?.title}
                            </div>
                            <div className="collapse-content">
                                <p>{v.Message}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="btn btn-error"
                    onClick={() => setLimit((p) => p + 4)}
                >
                    Load More
                    <span>
                        <PlusIcon className="w-4 h-4 ml-2" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Questions;
