
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {

	const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

	return (
		<>
			<h1>TodoApp: { todosCount } <small>Pendientes: { pendingTodosCount }</small></h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList 
						todos={ todos } 
						onDeleteTodo= { (id) => handleDeleteTodo(id) }
						onToggleTodo= { (id) => handleToggleTodo(id) }
					/>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={ (todo) => handleNewTodo(todo) }/>
				</div>
			</div>
		</>
	)
}
