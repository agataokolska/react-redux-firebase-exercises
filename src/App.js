import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            
            <Link to={'/hello'}>Hello</Link>
            <Link to={'/hello/world'}>World</Link>
            <Link to={'/smart'}>Smart</Link>
            <Link to={'/users'}>Users</Link>

            <Route path={'/hello/world'} component={World} />
            <Route path={'/smart'} component={SmartComponent} />
            <Route path={'/hello'} component={Hello} />
            <Route path={'/users'} component={Users} />
            <Route path={'/'} exact component={Hello} />
          </div>
        </Router>

      </div>
    )
  }
}

export default App

const Hello = (props) => (
  <p>hello</p>
)

const World = (props) => (
  <div>World!</div>
)