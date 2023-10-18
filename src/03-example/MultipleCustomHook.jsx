


import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote } from '../components/LoadingQuote';
import { Quotes } from '../components/Quotes';


export const MultipleCustomHook = () => {
    
    const { increment, counter } = useCounter(1);

    const { datas, isLoading, hasError} = useFetch(`https://images-api.nasa.gov/search?media_type=image&nasa_id=${counter}`);
    
    const { data, links } = !!datas && datas.collection.items[0];


    return (
        <>
            <h1>NASA Quotes</h1>
            <hr />
            {
                isLoading
                ?(
                    <LoadingQuote />
                )
                :(
                    <Quotes links={links} data={ data} />
                )
            }

            <button onClick={ () => increment() } className='btn btn-primary'>Next  </button>
            
        </>
    )
}
