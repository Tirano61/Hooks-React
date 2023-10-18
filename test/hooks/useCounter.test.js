import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";





describe('Pruebas en useCounter', () => { 

  test('Debe retornar los valores por defecto', () => { 

     const { result } = renderHook( () => useCounter()); 

     const { counter, decrement, increment, reset } = result.current;

     expect( counter ).toBe(10);
     expect( decrement ).toEqual(expect.any( Function ));
     expect( increment ).toEqual(expect.any( Function ));
     expect( reset ).toEqual(expect.any( Function ));

  });
  test('Debe generar el counter con el valor de 100', () => { 
    
    const { result } = renderHook( () => useCounter(100)); 
    const { counter } = result.current;
    expect( counter ).toBe(100);

  });
  test('Increment debe sumar 1 al counter', () => { 
    const { result } = renderHook( () => useCounter()); 
    const { increment } = result.current;
    act(() => {
      increment();
    });

    expect( result.current.counter ).toBe(11);

  });
  test('Decrementar debe restar 1 al counter', () => { 
    const { result } = renderHook( () => useCounter()); 
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    expect( result.current.counter ).toBe(9);

  });
  test('Reset debe dejar el valor por defecto', () => { 
    const { result } = renderHook( () => useCounter()); 
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });

    expect( result.current.counter ).toBe(10);

  });

});