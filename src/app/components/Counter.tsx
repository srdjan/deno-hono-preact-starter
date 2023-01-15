import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('did mount in browser')
  }, [])

  return (
    <div>
      <br></br>
      <p class="text-primary">This is Deno-Hono-Preact World!!!</p>
      <br></br>
      <div class="row">
        <div class="col text-primary"> Count: {counter}</div>
      </div>
      <div class="row">
        <a class="button primary" onClick={() => setCounter(counter - 1)}>-1</a>
        <a class="button primary"onClick={() => setCounter(counter + 1)}>+1</a>
      </div>
    </div>
  )
}

export default Counter