


import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        datas: null,
        isLoading: true,
        hasError: null
    })
    
    const getFetch = async() => {
        setState({
            ...state,
            isLoading: true,
        })
        const resp = await fetch(url);
        const datas = await resp.json();
        //console.log(datas)
        setState({
            datas: datas,
            isLoading: false,
            hasError:null

        })
    }

    useEffect(() => {
      
        getFetch();
      
    }, [url])
    

  
    return {
        datas: state.datas,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
