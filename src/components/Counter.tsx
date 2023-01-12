import { render, h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('did mount in browser')
  }, [])

  return (
    <div>
      <h4>This is Deno-Hono-Preact World!!!</h4>
      <h4>{counter}</h4>
      <div>
        <button className="text-success" onClick={() => setCounter(counter - 1)}>-1</button>
        <button className="text-success" onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </div>
  )
}

export default Counter