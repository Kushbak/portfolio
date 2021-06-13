import styled from "styled-components";

export const Button = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 1em 4em;
    background: rebeccapurple;
    border-radius: 5px;
    transition: all 0.3s linear;
    color: #eee;
    margin-top: 5rem;
    &:hover {
        opacity: 0.8;
    }
`