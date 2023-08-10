import { useCallback, useMemo, useRef, useState } from "react"
import Counter from "./Counter"

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange =(e) => {
        setInputValue(e.target.value)
    }

    const [count, setCount] = useState(0);
    const handleDecrease = useCallback((payload) => {
        setCount((prev) => prev - payload)
    }, [])

    const handleIncrease = useCallback((payload) => {
        setCount((prev) => prev + payload)
    }, [])

    const obj = useMemo(()=> {
        return ({
            title: 'Test', 
            description: 'lorem isdjbhj'
        })
    }, []);

    // const inputRef = useRef('');

    // console.log('inputRef', inputRef)

    // const handleChangeRef =(e) => {
    //     inputRef.current = e.target.value
    // }

    // console.log('inputRef', inputRef)

    return (
        <>   
            <input value={inputValue} onChange={handleChange} />
            <span>Input Value: {inputValue}</span>
            <div>
                {/* <Counter 
                    info={obj}
                    count={count}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                /> */}
            </div>
        </>
    )
}


export default Home