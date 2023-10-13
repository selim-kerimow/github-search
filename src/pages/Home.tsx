import React, { useEffect, useState } from "react";

// css 
import '../css/home.css'

// redux-toolkit-query
import { useLazyGetReposQuery, useSearchUsersQuery } from "../store/api/github.api";
import { useDebounce } from "../hooks/useDebbounce";
import RepoCard from "../components/RepoCard";


const Home: React.FC = () => {

    // states 
    const [search, setSearch] = useState<string>('')
    const [dropdown, setDropdown] = useState<boolean>(false)

    const debounced = useDebounce(search)

    // RTK Query
    const { data: users, isError, isLoading } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        // refetchOnFocus: true
    })
    const [fetchRepos, {data: repos, isLoading: ReposIsLoading}] = useLazyGetReposQuery()

    useEffect(() => {
        setDropdown(users?.length! > 0 && debounced.length > 3)
    }, [debounced, users])

    // functions 
    const listClickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return (
        <div className="text-center pt-10 h-[100%] min-h-[calc(100vh-59px)]">
            { isError && <h3 className="text-lg text-red-500 my-4">Something went wrong! Make sure you are connected to internet!</h3>}

        <div className="w-[30%] mx-auto relative max-sm:w-[90%] max-md:w-[70%] max-lg:w-[50%]">
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for users" 
                className="home--input" />

            {dropdown && <ul className="absolute w-full mx-auto rounded-md max-h-[200px] overflow-y-scroll">
                { isLoading && <p>Loading...</p>}
                { users && users.map(user => 
                    <li 
                        className="bg-slate-300 px-4 py-2 hover:bg-teal-600 hover:text-white cursor-pointer" 
                        key={user.id}
                        onClick={() => listClickHandler(user.login)}
                        >
                        { user.login }
                    </li>
                    )}
            </ul>}

            <div>
                { ReposIsLoading && <h1>Loading...</h1>}
                { repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
            </div>  
        </div>

            
        </div>
    )
}

export default Home