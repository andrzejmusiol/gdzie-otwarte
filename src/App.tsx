import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from "./containers/WelcomePage"
import Map from "./containers/Map"
import { ContextProvider } from "./store"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import Dashboard from "./containers/Dashboard"
import { cookiesSettings } from "./settings/settings"
import MobileHeader from "./components/header/MobileHeader"
import { useWindowDimensions } from "./hooks/hooks"
import Header from "./components/header/Header"
import About from "./containers/About"

const App = (): JSX.Element => {
  const { width } = useWindowDimensions()
  useEffect(() => {
    cookiesSettings()
  }, [])

  return (
    <ContextProvider>
      <div className="App">
        <Router>
          {width > 768 ? <Header /> : <MobileHeader />}
          <div>
            <Switch>
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/o-projekcie">
                <About />
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
