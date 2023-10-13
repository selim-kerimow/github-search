import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";


const Favorites: React.FC = () => {

    const { favorites } = useAppSelector(state => state.githubSlice)

    return (
        <div className="text-center pt-10 mx-auto max-sm:w-[90%]">
            <h1 className="text-bold text-4xl mb-6">Favorites URL</h1>
            <ul>
                { favorites?.map(fav => 
                    <li className="mb-4 hover:text-cyan-500 hover:underline">
                        <a href={fav} target="_blank">
                            {fav}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Favorites