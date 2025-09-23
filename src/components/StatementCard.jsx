import React from 'react'

function StatementCard({ imageSrc, title, description }) {
    return (
        <div className="w-full px-2 py-4 flex flex-row items-start justify-start hover:shadow-lg transition-shadow duration-300  rounded-lg cursor-pointer gap-5 relative bg-transparent  overflow-hidden group hover:bg-none">
            <span className={`absolute left-0 bottom-0 w-full h-full bg-eh-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-1`}></span>
            <div className="w-full h-full z-1 flex flex-row items-start justify-start relative">
                <div className="w-1/4 flex items-center justify-center">
                    <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
                </div>
                <div className="w-3/4 items-start justify-start flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-eh-black group-hover:text-eh-white transition-colors duration-300">{title}</h2>
                    <p className="text-normal text-eh-black text-lg group-hover:text-eh-white">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default StatementCard