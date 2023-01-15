import { Hono } from 'hono'
import { cors } from 'middleware'

const api = new Hono()
api.use('/api/*', cors())

api.get('/', (c) => {
  return c.json({ message: 'Hello API!' })
})

export { api }