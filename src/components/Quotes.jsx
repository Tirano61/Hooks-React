


import React, { useLayoutEffect, useRef, useState } from 'react'


export const Quotes = ({data, links}) => {

    const [boxSize, setBoxSize] = useState({
        height: 0,
        width : 0, 
    });  

    const pRef = useRef();

    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect();
        setBoxSize({height, width})
    }, [data])

    return (
        <>
            <blockquote 
                className='blockquote text-wrap'
                style={{ display: 'flex' }}
            >
                <p ref={ pRef } className='mb-1'>{ data[0].description }</p>
                <img src={ links[0].href } alt="foto" /> 
                <footer className='blockquote-footer mt-4'> `Album : { data[0].album}` </footer>
            </blockquote>
            <code>{ JSON.stringify(boxSize) }</code>
        </>
        
    )
}

