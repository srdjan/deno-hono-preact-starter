import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v2.7.2/mod.ts'
import { serveStatic, logger, prettyJSON, cors } from 'https://deno.land/x/hono@v2.7.2/middleware.ts'
import { api } from './src/api/api.ts'

const app = new Hono()

app.use('*', logger(), prettyJSON())
app.use('*', serveStatic({ root: './public' }))
app.route('/api', api)

serve(app.fetch)