import { useState } from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import './App.css'
import { Hamburger } from './components/Hamburger/Hamburger.style'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleIsSidebarOpen = () => setIsSidebarOpen(state => !state)
    const closeOpenedSidebarByClickOutside = () => isSidebarOpen && setIsSidebarOpen(false)

    return (
        <AppContainer>
            <Hamburger isSidebarOpen={isSidebarOpen} onClick={toggleIsSidebarOpen}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <Main onClick={closeOpenedSidebarByClickOutside}>
                <Switch>
                    <Route><Home/></Route>
                </Switch>
            </Main>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: rebeccapurple;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

const Main = styled.main`  
    width: 100%;
    @media (min-width: 768px) {
        width: 75%;
    }
`