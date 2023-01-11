import { h, Fragment } from 'preact'

export const Layout = (props) => (
  <>
    <div>
      Toolbar, Sidebar, Backdrop
    </div>
    <div>
      {props.children}
    </div>
  </>
)