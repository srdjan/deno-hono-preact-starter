import { Hono } from 'https://deno.land/x/hono@v2.7.2/mod.ts'
import { cors } from 'https://deno.land/x/hono@v2.7.2/middleware.ts'

const api = new Hono()
api.use('/api/*', cors())

api.get('/', (c) => {
  return c.json({ message: 'Hello API!' })
})

export { api }