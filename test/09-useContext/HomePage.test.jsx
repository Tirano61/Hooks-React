import { prettyDOM, render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Prueba en <HomePage /> ', () => { 


  test('should Debe mostrar el componente sin el usuario', () => { 
    
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML).toBe('Usuario logeado : ');


  });
  test('should Debe mostrar el componente con el usuario', () => { 
    
    render(
      <UserContext.Provider value={{user: {id:1,name:'Dario', email: 'test@google'}}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML).toBe('Usuario logeado : Dario');
    screen.debug()

  });
});