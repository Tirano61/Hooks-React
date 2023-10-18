import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-example/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {  

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(()=>{
    jest.clearAllMocks();
  })

  test('Debe mostrar el componente por defecto', () => { 
    
    useFetch.mockReturnValue({
      datas: null,
      isLoading: true,
      hasError: null
    })

    render( <MultipleCustomHook />);

    expect( screen.getByText('Loading ...'));
    expect( screen.getByText('NASA Quotes'));

    const nextButton = screen.getByRole('button', {name: 'Next'});
    expect(nextButton.disabled).toBeTruthy();

  });
  test('Debe mostrar un quote', () => { 
    
    useFetch.mockReturnValue({
      datas: {collection:{items:[{data:[{description:"description",album: ["album"]}],links: [{href: "http://localhost/href"}]}]}},
      isLoading: false,
      hasError: null
    })

    render( <MultipleCustomHook />);
    const { src } = screen.getByRole('img');
    expect( screen.getByText('description')).toBeTruthy();
    expect( screen.getByText('Album : album')).toBeTruthy();
    expect( src ).toBe('http://localhost/href');

  });
  test('Debe llamar la funcion de incrementar', () => { 
    
    
    useFetch.mockReturnValue({
      datas: {collection:{items:[{data:[{description:"description",album: ["album"]}],links: [{href: "http://localhost/href"}]}]}},
      isLoading: false,
      hasError: null
    })
    
    render( <MultipleCustomHook />);
    const nextButton = screen.getByRole('button', {name: 'Next'});
    fireEvent.click( nextButton );

    expect( mockIncrement).toHaveBeenCalled();

  });
})