import React from "react"
import {Switch, Route, HashRouter} from "react-router-dom"
import WelcomePage from "./containers/WelcomePage"
import MapUI from "./containers/Map"
import { ContextProvider } from "./store"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import Dashboard from "./containers/Dashboard"
import MobileHeader from "./components/header/MobileHeader"
import { useWindowDimensions } from "./hooks/hooks"
import Header from "./components/header/Header"
import About from "./containers/About"
import PrivacyPolicy from "./containers/PrivacyPolicy"
import Cookies from "js-cookie"
import CookieNotification from "./components/CookiesNotifaction"

const App = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const cookieStatus = Cookies.get("cookiesConfirmation")

  return (
    <ContextProvider>
      <div className="App">
        <HashRouter>
          {cookieStatus !== "confirmed" ? <CookieNotification /> : null}
          {width > 768 ? <Header /> : <MobileHeader />}
          <div>
            <Switch>
              <Route path="/map">
                <MapUI />
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
              <Route path="/polityka-prywatnosci">
                <PrivacyPolicy />
              </Route>
              <Route path="/">
                <WelcomePage />
              </Route>
            </Switch>
          </div>
        </HashRouter>
      </div>
    </ContextProvider>
  )
}

export default App
