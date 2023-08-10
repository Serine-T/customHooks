import { memo, useRef, useState } from "react"

const Counter =( {info,count,handleDecrease, handleIncrease })=> {
    console.log('info', info)

    const amountRef = useRef(0);

    console.log('amountRef', amountRef)

    amountRef.current += 1

    console.log('amountRef', amountRef.current)
    
    return (
        <>
            <button
                onClick={() => handleDecrease(5)}
            >-</button>
            <span>{count}</span>
            <button
                onClick={ () => handleIncrease(5)}
            >+</button>
            <>
                 Rerenders: {amountRef.current}
            </>
            
        </>
    )
}

export default memo(Counter)