import * as esbuild from 'https://deno.land/x/esbuild@v0.15.10/mod.js'
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";

const importMapURL = new URL('./import_map.json', import.meta.url)
await esbuild.build({
    plugins: [denoPlugin({ importMapURL: importMapURL })],
    entryPoints: ['./src/app/app.tsx'],
    outdir: 'public',
    bundle: true,
    minify: true,
    format: 'esm',
    target: ["chrome99", "firefox99", "safari15"],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
})
esbuild.stop()