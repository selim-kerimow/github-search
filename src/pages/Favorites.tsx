import React from "react";


const Favorites: React.FC = () => {

    return (
        <div className="h-[100%] min-h-[calc(100vh-60px)] text-center pt-10 mx-auto max-sm:w-[90%]">
            <h1 className="text-bold text-4xl mb-6">Favorites URL</h1>
            <ul>
                <li className="mb-4 hover:text-cyan-500 hover:underline">
                    <a target="_blank">
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Favorites