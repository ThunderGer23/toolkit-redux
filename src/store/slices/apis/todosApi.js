import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApp',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (build) => ({
        getTodos: build.query({
            query: () => ({ url: '/todos' })
        }),
        getTodo: build.query({
            query: ( id ) => ({ url: `/todos/${id}` })
        }),
    })
})

export const {useGetTodosQuery, useGetTodoQuery} = todosApi