import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from "./containers/WelcomePage"
import Map from "./containers/Map"
import { MapStoreProvider } from "./store"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"

const App = (): JSX.Element => (
  <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/map">
            <MapStoreProvider>
              <Map />
            </MapStoreProvider>
          </Route>
          <Route path="/logowanie">
            <SignIn />
          </Route>
          <Route path="/rejestracja">
            <SignUp />
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
