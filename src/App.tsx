import { render, h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { Layout } from './components/Layout.tsx'

export default function App() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('did mount in browser')
    }, [])

    return (
        <>
            <Layout>
                <h1>This is Your World!!!</h1>
                <h2>{counter}</h2>
                <div>
                    <button class="text-success" onClick={() => setCounter(counter - 1)}>-1</button>
                    <button class="text-success" onClick={() => setCounter(counter + 1)}>+1</button>
                </div>
            </Layout>
        </>
    );
}

const app = h(App, null, null)
render(app, document.getElementById('root'))