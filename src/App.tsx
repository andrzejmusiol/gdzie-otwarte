import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import WelcomePage from './containers/WelcomePage'
import MapContainer from './containers/Map'

const App = (): JSX.Element => (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/map">
                        <MapContainer />
                    </Route>
                    <Route path="/">
                        <WelcomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>


    </div>
)

export default App
