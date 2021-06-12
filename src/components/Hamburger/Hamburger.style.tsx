import styled from "styled-components"
import { SidebarType } from "../../App"

export const Hamburger = styled.button<SidebarType>`
    width: 40px;
    height: 40px;
    padding: 6px 0;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 10px;
    right: ${p => p.isSidebarOpen ? '10px' : '88%'};
    background-color: rebeccapurple;
    color: #fff;
    z-index: 11;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    & > span {
        display: block;
        width: 15px;
        height: 2px;
        background-color: #fff;
        &:first-child {
            transform: rotate(20px, 20px)
        }
    }
    @media (min-width: 900px) {
        display: none;
    }
`