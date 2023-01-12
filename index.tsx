import { render, h, Fragment } from 'preact'
import { Layout } from './src/components/Layout.tsx'
import { Counter } from './src/components/Counter.tsx'

export default function App() {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  )
}

const app = h(App, null, null)
render(app, document.getElementById('root'))