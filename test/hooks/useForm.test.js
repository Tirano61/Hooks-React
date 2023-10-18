import { act, render, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"




describe('Pruebas en useForm', () => { 

  const inicialForm = {
    name: 'Dario',
    email: 'dario@google.com',
  }

  test('Debe regresar los valores por defecto', () => { 
    const { result } = renderHook(() => useForm( inicialForm ));
   
    expect(result.current).toEqual({
        name: inicialForm.name,
        email: inicialForm.email,
        formState: inicialForm,
        onInputChange: expect.any( Function ),
        onResetForm: expect.any( Function ),
      })
  });
  test('Debe cambiar el nombre en el form', () => { 
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm( inicialForm ));
    const { onInputChange, formState } = result.current;

    act(() => {
      onInputChange( {target: {name: 'name', value: newValue} });
    })

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);


  })
  test('Debe realizar el reset del form', () => { 
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm( inicialForm ));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange( {target: {name: 'name', value: newValue} });
      onResetForm();
    })

    expect(result.current.name).toBe(inicialForm.name);
    expect(result.current.formState.name).toBe(inicialForm.name);


  })
})