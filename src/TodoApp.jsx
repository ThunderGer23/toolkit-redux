import { EventNote } from "@mui/icons-material"
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useState } from "react"
import { useGetTodosQuery, useGetTodoQuery } from "./store/slices/apis"

export const TodoApp = () => {
    const {data: todos = [], isLoading: isLoadings} = useGetTodosQuery()
    const [todoId, setTodoId] = useState(10)
    const {data: todo, isLoading} = useGetTodoQuery(todoId)
    
    const nextTodoId = () => {
        setTodoId(todoId + 1)
    }

    const prevTodoId = () => {
        if(todoId===1) return
        setTodoId(todoId - 1)
    }

  return (
    <>
        <h1>Todo - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'True': 'False'}</h4>

        <pre>....</pre>

        {/* <List sx={{ width: '100%', maxWidth: 660 }}>
            {todos.map((todo) => (
                <ListItem key={todo.id}>
                    <ListItemAvatar>
                    <Avatar>
                        <EventNote />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo.title}/>
                </ListItem>
            ))}
        </List> */}
    
        <List sx={{ width: '100%', maxWidth: 660 }}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <EventNote />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={todo?.title} secondary={todo?.completed? 'true': 'false'}/>
            </ListItem>
        </List>
    

        <Button onClick= { prevTodoId } >
            Prev Todo
        </Button>
        <Button onClick= { nextTodoId }>
            Next Todo
        </Button>
    </>
  )
}
