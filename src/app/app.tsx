import { render, h } from 'preact'
import { Redirect, Switch, Route, Link, useRoute } from "wouter-preact";
import Counter from './components/Counter.tsx'
import About from './components/About.tsx'
import Features from './components/Features.tsx'
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
    <div class="container">
      <nav class="nav tabs">
        <ActiveLink href="/" class="text-primary">Home</ActiveLink>
        <ActiveLink href="/features" class="text-primary">Features</ActiveLink>
        <ActiveLink href="/about" class="text-primary">About</ActiveLink>
        <span class="nav-right text-primary is-vertical-align"><strong>シ</strong></span>
      </nav>

      <main>
        <Switch>
          <Route path="/">
            <Counter></Counter>
          </Route>
          <Route path="/features">
            <Features></Features>
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
  );
}

render(<App />, document.getElementById("root"));
