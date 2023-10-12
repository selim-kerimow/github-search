import React from "react";
import { Link, useLocation } from "react-router-dom";



const Navbar: React.FC = () => {

    const location = useLocation()
    const currentLocation = (path: string) => {
        if (location.pathname === path) {
            return 'bg-slate-600 rounded-md'
        } else {
            return ''
        }
    }

    return (
        <div className="flex justify-between items-center bg-teal-600 px-10 py-2 text-white max-sm:px-2">

            <h2 className="text-xl">Github Search</h2>

            <nav className="flex gap-5 items-center text-lg max-sm:gap-2">

                <Link to='/' className={`p-2 ${currentLocation('/')}`}>
                    Home
                </Link>
                <Link to='/favorites' className={`p-2 ${currentLocation('/favorites')}`}>
                    Favorites
                </Link>

            </nav>        
        </div>

    )
}

export default Navbar