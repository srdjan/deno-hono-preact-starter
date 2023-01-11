import { h, render } from 'preact';
import App from "./App.tsx";

const app = h(App, null, null)

render(app, document.getElementById('root'))