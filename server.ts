import { serve } from 'serve'
import { Hono } from 'hono'
import { serveStatic, logger, prettyJSON } from 'middleware'
import { api } from './src/api/api.ts'

const app = new Hono()

app.use('*', logger(), prettyJSON())
app.use('*', serveStatic({ root: './public' }))
app.route('/api', api)
app.notFound((c) => c.json({ message: 'Route Not Found', ok: false }, 404))
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Unexpected Error', 500)
})
serve(app.fetch)