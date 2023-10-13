import React, { useState } from "react";
import { IRepo } from "../models/reposModel";
import { useActions, useAppSelector } from "../hooks/reduxHooks";

// react-icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


interface RepoCardProps {
    repo: IRepo
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {

    // Redux Hooks
    const {addFavorites, removeFavorites} = useActions()
    const { favorites } = useAppSelector(state => state.githubSlice)

    // states 
    const [isFav, setIsFav] = useState<boolean>(favorites.includes(repo.html_url))
    
    // functions
    const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsFav(true)
        addFavorites(repo.html_url)
    }
    const removeFromFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsFav(false)
        removeFavorites(repo.html_url)
    }

    return (
        <div className="w-full border rounded px-3 py-5 my-5 hover:bg-teal-600 hover:text-white cursor-pointer max-extraSmall:text-sm">
                <h2 className="text-xl max-sm:text-sm">{repo.full_name}</h2>
                <p className="mb-3">
                    <strong>Forks: </strong> <span>{repo.forks} </span>
                    <strong>Watchers:</strong> <span> {repo.watchers}</span>
                </p>

                {repo.description && <p className="mb-4"><strong>Descriptiion: </strong>{repo.description}</p>}

                <div className="flex justify-between px-5 max-sm:p-0">
                    { isFav 
                        ? 
                        <button onClick={removeFromFavorites} className="cursor-poiner"> <AiFillHeart size={25} color="red"/> </button>
                        : 
                        <button onClick={addToFavorites} className="cursor-poiner"> <AiOutlineHeart size={25}/> </button>
                    }
                    <a 
                        className="bg-slate-600 rounded-md p-2 text-white cursor-pointer max-extraSmall:w-[70%] hover:bg-yellow-300 hover:text-black" 
                        href={repo.html_url}
                        target="_blank"
                        >
                        Go To Repository
                    </a>                    
                </div>

        </div>
    )
}

export default RepoCard