import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v2.0.2/mod.ts'
import { serveStatic, logger, html, prettyJSON } from 'https://deno.land/x/hono@v2.0.2/middleware.ts'

const app = new Hono()

app.use('*', logger(), prettyJSON())
app.use('/*', serveStatic({ root: './' }))
app.notFound((ctx) => ctx.json({ message: 'Not Found', Ok: false }, 404))

serve(app.fetch)