import React, { useEffect, useState } from 'react'

function LoadingScrean({ toglevisibleLoading }) {
    const [text, setText] = useState("");
    const fulltext = "<Hello World! />"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fulltext.substring(0, index))
            index++;
            if (index > fulltext.length) {
                clearInterval(interval);
                setTimeout(() => {

                    toglevisibleLoading();
                }, 500);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [toglevisibleLoading])

    return (
        <div className='flex w-[100vw] h-[100vh] items-center justify-center'>
            <div className="flex flex-col items-center w-[65%] lg:w-[20%] gap-y-5">

                <div className="mt-4 text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    {text}
                    <span className='ml-2 text-white animate-blink'>|</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-0.5">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-[100%] rounded-full transition-all duration-400 shadow-2xl"
                        style={{
                            width: `${(text.length / fulltext.length) * 100}%`,
                        }}
                    ></div>
                </div>

            </div>
        </div>
    )
}

export default LoadingScrean