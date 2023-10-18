const { render, screen, fireEvent } = require("@testing-library/react");
import { TodoIten } from "../../src/08-useReducer/TodoIten";


describe('Pruebas en <TodoIten />', () => { 

  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( ()=> jest.clearAllMocks() );

  test('Debe mostrar el todo pendiente de completar', () => { 
    render( <TodoIten 
					todo={todo} 
					onToggleTodo={onToggleTodoMock} 
					onDeleteTodo={onDeleteTodoMock}
				/>
      );

    const liElemnt = screen.getByRole('listitem');
		expect(liElemnt.className).toBe('list-group-item d-flex justify-content-between')
		
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('align-self-center false');
		
  });
	test('Debe mostrar el todo completado', () => { 

		todo.done = true;
		
		render( <TodoIten 
				todo={todo} 
				onToggleTodo={onToggleTodoMock} 
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		const liElemnt = screen.getByRole('listitem');
		expect(liElemnt.className).toBe('list-group-item d-flex justify-content-between')

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
		 
	})
	test('span debe llamar el toggloTodo cuando se hace click', () => { 
		
		render( <TodoIten 
				todo={todo} 
				onToggleTodo={onToggleTodoMock} 
				onDeleteTodo={onDeleteTodoMock}
			/>
		);
		const spanElement = screen.getByLabelText('span');
		fireEvent.click( spanElement );

		expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
	});
	test('Button debe llamar el deleteTodo', () => { 
		
		render( <TodoIten 
				todo={todo} 
				onToggleTodo={onToggleTodoMock} 
				onDeleteTodo={onDeleteTodoMock}
			/>
		);
		const butonElement = screen.getByRole(`button`);
		fireEvent.click( butonElement );

		expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

	});
});