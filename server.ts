import { serve } from 'serve'
import { Hono } from 'hono'
import { serveStatic, logger, prettyJSON } from 'middleware'
import { api } from './src/api/api.ts'

const app = new Hono()

app.use('*', logger(), prettyJSON())
app.use('*', serveStatic({ root: './public' }))
app.route('/api', api)

serve(app.fetch)