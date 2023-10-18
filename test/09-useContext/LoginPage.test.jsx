import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

const setUserMock = jest.fn();

describe('Pruebas en <LoginPage />', () => { 
  
  test('El onclick debe cambiar el usuario', () => { 
    
    render( 
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole('button');
    fireEvent.click( button );  
    
    expect( setUserMock ).toHaveBeenCalledWith({"email": "email@gmail.com", "id": 123, "name": "Esteban Quito"});
  });
  
});