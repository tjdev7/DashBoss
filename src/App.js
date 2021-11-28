import './App.css'

import React from 'react'
import TeamsTab from './components/TeamsTab'
import AboutTab from './components/AboutTab'
import ChartsTab from './components/ChartsTab'
import HeatMapsTab from './components/HeatMapsTab'
import SupportTab from './components/SupportTab'
import ChangelogTab from './components/ChangelogTab'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <header>
                <span className="AppLogo">💼</span>

                <aside className="UserPanel">
                    <span className="PicStyle">👱</span>
                    <p className="UserNameStyle">username</p>
                </aside>

                <ul>
                    <BrowserRouter>
                        <li className="TableClass">Dashboard</li>

                        <hr />
                        <Link to="/TeamsTab">
                            <li>Teams</li>
                        </Link>

                        <Link to="/AboutTab">
                            <li>About</li>
                        </Link>

                        <br />
                        <li className="TableClass">Sales</li>
                        <hr />

                        <Link to="/ChartsTab">
                            <li>Charts & Graphs</li>
                        </Link>

                        <Link to="/HeatMapsTab">
                            <li>HeatMaps</li>
                        </Link>

                        <br />

                        <li className="TableClass">Help</li>
                        <hr />

                        <Link to="/SupportTab">
                            <li>Support</li>
                        </Link>
                        <Link to="/ChangelogTab">
                            <li>Changelog</li>
                        </Link>

                        <Routes>
                            <Route path="/TeamsTab" element={<TeamsTab />} />
                            <Route path="/AboutTab" element={<AboutTab />} />
                            <Route path="/ChartsTab" element={<ChartsTab />} />

                            <Route
                                path="/HeatMapsTab"
                                element={<HeatMapsTab />}
                            />
                            <Route
                                path="/SupportTab"
                                element={<SupportTab />}
                            />
                            <Route
                                path="/ChangelogTab"
                                element={<ChangelogTab />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ul>
            </header>
        </div>
    )
}

export default App