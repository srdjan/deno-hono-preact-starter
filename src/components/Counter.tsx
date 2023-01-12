import { render, h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('did mount in browser')
  }, [])

  return (
    <div className="container">
      <h4>This is Your World!!!</h4>
      <h4>{counter}</h4>
      <div>
        <button class="text-success" onClick={() => setCounter(counter - 1)}>-1</button>
        <button class="text-success" onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </div>
  )
}
