import './App.css'

import {
    AiOutlineApartment,
    AiOutlineAreaChart,
    AiFillQuestionCircle,
    AiFillRead,
} from 'react-icons/ai'

import { FaLifeRing } from 'react-icons/fa'

import React from 'react'
import HomePage from './components/HomePage'
import TeamsTab from './components/TeamsTab'
import AboutTab from './components/AboutTab'
import ChartsTab from './components/ChartsTab'
import MapsDataTab from './components/MapsDataTab'

import SupportTab from './components/SupportTab'
import ChangelogTab from './components/ChangelogTab'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div id="menuDiv">
                        <div id="mainMenu">
                            <ul>
                                <li>
                                    <a href="#">DashBoss</a>
                                </li>

                                <li>
                                    <span>
                                        ☰ <i class="arrow"></i>
                                    </span>
                                    <ul class="dropdown right0">
                                        <Link to="/TeamsTab">
                                            <li>
                                                <a href="#">
                                                    <AiOutlineApartment />
                                                    Teammates
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/ChartsTab">
                                            <li>
                                                <a href="#">
                                                    <AiOutlineAreaChart />{' '}
                                                    Charts
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/AboutTab">
                                            <li>
                                                <a href="#">
                                                    <AiFillQuestionCircle />{' '}
                                                    About
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/SupportTab">
                                            <li>
                                                <a href="#">
                                                    <FaLifeRing /> Support
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/ChangelogTab">
                                            <li>
                                                <a href="#">
                                                    <AiFillRead />
                                                    Changelog
                                                </a>
                                            </li>
                                        </Link>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Routes>
                        <Route path="/HomePage" element={<HomePage />} />
                        <Route path="/TeamsTab" element={<TeamsTab />} />
                        <Route path="/AboutTab" element={<AboutTab />} />
                        <Route path="/ChartsTab" element={<ChartsTab />} />

                        <Route path="/MapsDataTab" element={<MapsDataTab />} />

                        <Route path="/SupportTab" element={<SupportTab />} />
                        <Route
                            path="/ChangelogTab"
                            element={<ChangelogTab />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
