import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            
            <Link to={'/hello'}>Hello</Link>
            <Link to={'/hello/world'}>World</Link>
            <Link to={'/smart'}>Smart</Link>
            <Route path={'/hello/world'} component={World} />
            <Route path={'/smart'} component={SmartComponent} />
            <Route path={'/hello'} component={Hello} />
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