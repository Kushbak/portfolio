import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'



const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <AppContainer>
            <Hamburger>Open</Hamburger>
            <Sidebar />
            <Main />
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: #727272;
    min-height: 100vh;
    min-width: 100vw;
`

const Hamburger = styled.button`
    position: fixed;
    top: 10px;
    left: 10px;
`