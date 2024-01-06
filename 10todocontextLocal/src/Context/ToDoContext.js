 import { createContext,useContext } from "react";

 export const ToDoContext = createContext({
    Todos: [
        { 
            id: 1,
            todo:" Todo msg",
            Completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete:(id) => {}
 })  


 export const useTodo =() =>{
    return useContext(ToDoContext)
 }

 export const TodoProvider = ToDoContext.Provider