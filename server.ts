import { serve } from 'serve'
import { Hono } from 'hono'
import { serveStatic, logger, prettyJSON } from 'middleware'
import { api } from './src/api/api.ts'

const app = new Hono()

app.use('*', logger(), prettyJSON())
app.all('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))
app.use('*', serveStatic({ root: './public' }))
app.route('/api', api)
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})
serve(app.fetch)