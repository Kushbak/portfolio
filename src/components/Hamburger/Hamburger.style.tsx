import styled from "styled-components"


type Hamburger = { isSidebarOpen: boolean }
export const Hamburger = styled.button<Hamburger>`
    width: 30px;
    height: 30px;
    padding: 5px 0;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 10px;
    right: ${p => p.isSidebarOpen ? '10px' : '90%'};
    background-color: rebeccapurple;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    & > span {
        display: block;
        width: 15px;
        height: 1px;
        background-color: #fff;
        &:first-child {
            transform: rotate(20px, 20px)
        }
    }
    @media (min-width: 768px) {
        display: none;
    }
`