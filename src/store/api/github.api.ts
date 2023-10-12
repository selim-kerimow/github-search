import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// models
import {IServerResponse, IUser } from '../../models/userModel';
import { IRepo } from '../../models/reposModel';


export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    // refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: IServerResponse) => response.items 
        }),
        getRepos: build.query<IRepo[], string> ({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})


export const { useSearchUsersQuery, useLazyGetReposQuery } = githubApi