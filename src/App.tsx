import { h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export default function App() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('did mount in browser')
    }, [])

    return (
        <>
            <h1>Yeah!!! World!!!</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-1</button>
                <button onClick={() => setCounter(counter + 1)}>+1</button>
            </div>
        </>
    );
}