import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useRedcer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )  || [] );
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
      ///Se dispara cada vez que los [todos] cambian
      localStorage.setItem( 'todos', JSON.stringify( todos ));
    }, [todos])
    
    const handleNewTodo = ( todo ) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    }
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }
		const todosCount = todos.length;
		const pendingTodosCount = todos.filter(todo => !todo.done).length;
  
    return {
        todos, 
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo,
				todosCount: todos.length,
				pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}