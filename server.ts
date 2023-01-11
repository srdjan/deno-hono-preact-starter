import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import render from 'preact-render-to-string';
import { h } from 'preact';
import App from "./src/App.tsx";

const handler = async (request: Request) => {

    const url = new URL(request.url)
    console.log(url.pathname)
    
    // match the route
    if (url.pathname === '/') {
        const app = render(h(App, null, null))

        const html = `
            <body>
                <div id="root">${app}</div>
                <script type="module" src="src/index.js"></script>
            </body>`

        return new Response(html, {
            headers: { 'content-type': 'text/html' },
        });
    }

    // match file path
    const filePath = './out' + url.pathname
    let fileSize;

    try {
        fileSize = (await Deno.stat(filePath)).size;
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {
            return new Response(null, { status: 404 });
        }
        return new Response(null, { status: 500 });
    }

    const file = await Deno.readFile(filePath)

    return new Response(file, {
        headers: { 'content-type': 'text/javascript' },

    });
};

console.log("Started...");
serve(handler);