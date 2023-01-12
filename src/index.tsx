import { render, h, Fragment } from 'preact'
import { Layout } from './components/Layout.tsx'
import { Counter } from './components/Counter.tsx'

function App() {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  )
}

const app = h(App, null, null)
render(app, document.getElementById('root'))