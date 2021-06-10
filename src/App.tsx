import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import NotFound from './components/404/404'
import { Hamburger } from './components/Hamburger/Hamburger.style'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'
import petProjectsData from './data/pet-projects.json'
import worksData from './data/works.json'

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleIsSidebarOpen = () => setIsSidebarOpen(state => !state)
    const closeOpenedSidebarByClickOutside = () => isSidebarOpen && setIsSidebarOpen(false)

    return (
        <AppContainer>
            <Hamburger isSidebarOpen={isSidebarOpen} onClick={toggleIsSidebarOpen}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <Main isSidebarOpen={isSidebarOpen} onClick={closeOpenedSidebarByClickOutside}>
                <Switch>
                    <Route path='/' exact><Home /></Route>
                    <Route path='/works'><Projects projects={worksData} area='work' /></Route>
                    <Route path='/petProjects'><Projects projects={petProjectsData} area='pet-project' /></Route>
                    <Route path='*'><NotFound /></Route>
                </Switch>
            </Main>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #111;
    min-height: 100vh;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
`

const Main = styled.main<{isSidebarOpen: boolean}>`  
    width: 100%;
    @media (min-width: 900px) {
        width: 75%;
    }
`