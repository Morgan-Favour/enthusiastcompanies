import React from 'react'

function Title({ title, text1, text2, textAligment }) {
    return (
        <div className={`w-full flex flex-col text-${textAligment} items-${textAligment} justify-center mb-[10px]`}>
            <div className="px-5 py-3 bg-eh-accent w-fit rounded-4xl mb-[20px]">
                <div className="w-full h-full flex gap-2 items-center justify-center text-eh-white font-medium text-lg">
                    <span>{title}</span>
                </div>
            </div>
                <p className="text-eh-black font-bold text-4xl capitalize">{text1}</p>
                <p className="text-eh-accent font-normal text-4xl capitalize">{text2}</p>
        </div>

    )
}

export default Title