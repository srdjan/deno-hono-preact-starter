import { h, Fragment } from 'preact'

const Layout = (props) => (
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <div class="tabs">
          <a class="active">Home</a>
          <a>About</a>
        </div>
      </div>
      <div class="nav-center">
        <h4 class="outline"> _Deno-Hono-Preact_</h4>
      </div>
      <div class="nav-right is-vertical-align">
        <a class="active">シ</a>
      </div>
    </nav>
    <br></br>
    <br></br>
    {props.children}
  </div>
)

export default Layout