import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from "./containers/WelcomePage"
import Map from "./containers/Map"

const App = (): any => (
  <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
)

export default App
