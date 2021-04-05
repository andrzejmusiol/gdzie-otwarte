import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from "./containers/WelcomePage"
import Map from "./containers/Map"
import { ContextProvider } from "./store"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import Dashboard from "./containers/Dashboard"

const App = (): JSX.Element => {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/logowanie">
                <SignIn />
              </Route>
              <Route path="/rejestracja">
                <SignUp />
              </Route>
              <Route path="/panel-klienta">
                <Dashboard />
              </Route>
              <Route path="/">
                <WelcomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ContextProvider>
  )
}

export default App
