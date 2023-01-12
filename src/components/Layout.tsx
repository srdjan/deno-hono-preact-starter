import { h, Fragment } from 'preact'

export const Layout = (props) => (
  <div>
    <nav className="nav">
      <div className="nav-left">
        <a className="brand" href="#">シ</a>
      </div>
      <div className="nav-center">
        <h3 className="outline">-Deno-Hono-Preact- Starter</h3>
      </div>
      <div className="nav-right">
        <span className="primary is-vertical-align">⊣˚∆˚⊢</span>
      </div>
    </nav>

    <br></br>

    <div>
      {props.children}
    </div>
  </div>
)