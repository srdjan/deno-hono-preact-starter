import { Hono } from 'hono'

export const api = new Hono()

api.get('/', (c) => {
  return c.json({ message: 'Hello API!' })
})
