import { render, h } from 'preact'
import { Redirect, Switch, Route, Router, Link, useRoute } from "wouter-preact";
import Counter from './components/Counter.tsx'
import About from './components/About.tsx'
import NotFound from './components/NotFound.tsx'

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);

  return (
    <Link {...props}>
      <a href="/" class={isActive ? "active" : ""}>
        {props.children}
      </a>
    </Link>
  )
}

function App() {
  return (
    <Router base="/app">
      <Route path="~/" children={<Redirect to="/" />} />

      <div class="container">
        <nav class="nav">
          <div class="tabs">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
          </div>
          <div class="nav-right">
            <span class="primary is-vertical-align"><strong>シ</strong></span>
          </div>
        </nav>

        <main>
          <Switch>
            <Route path="/">
              <Counter></Counter>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/:anything*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
