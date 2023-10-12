import React from "react";

// css 
import '../css/home.css'


const Home: React.FC = () => {

    return (
        <div className="text-center pt-10">

        <div className="w-[30%] mx-auto relative max-sm:w-[90%] max-md:w-[70%] max-lg:w-[50%]">
            <input 
                placeholder="Search for users" 
                className="home--input" />

            <ul className="absolute w-full mx-auto rounded-md max-h-[200px] overflow-y-scroll">
                    <li 
                        className="bg-slate-300 px-4 py-2 hover:bg-teal-600 hover:text-white cursor-pointer" 
                        >
                        Repo
                    </li>
            </ul>

        </div>

            
        </div>
    )
}

export default Home