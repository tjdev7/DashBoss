

import './App.css'

import {
    AiOutlineApartment,
    AiOutlineAreaChart,
    AiFillQuestionCircle,
    AiFillRead,
    AiOutlineUser
} from 'react-icons/ai'

import { FaLifeRing } from 'react-icons/fa'

import React from 'react'
import HomePage from './components/HomePage'
import TeamsTab from './components/TeamsTab'
import AboutTab from './components/AboutTab'
import ChartsTab from './components/ChartsTab'
import SupportTab from './components/SupportTab'
import ChangelogTab from './components/ChangelogTab'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <header>
                
                    <BrowserRouter>
                    <ul>

                        <Link to="/HomePage">
                            <li><span className="PicStyle"><AiOutlineUser/></span>@db_user161</li>
                        </Link>


                        <Link to="/TeamsTab">
                            <li><AiOutlineApartment/>Teams</li>
                        </Link>

                        <Link to="/AboutTab">
                            <li><AiFillQuestionCircle/>About</li>
                        </Link>

                        <Link to="/ChartsTab">
                            <li><AiOutlineAreaChart/>Charts & Graphs</li>
                        </Link>

                        <Link to="/SupportTab">
                            <li><FaLifeRing/>Support</li>
                        </Link>
                        <Link to="/ChangelogTab">
                            <li><AiFillRead/>Changelog</li>
                        </Link>
</ul>
<br/>
                        <Routes>
                            <Route path="/HomePage" element={<HomePage />} />
                            <Route path="/TeamsTab" element={<TeamsTab />} />
                            <Route path="/AboutTab" element={<AboutTab />} />
                            <Route path="/ChartsTab" element={<ChartsTab />} />

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
                
            </header>
        </div>
    )
}

export default App
