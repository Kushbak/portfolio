import styled from 'styled-components'

const Sidebar = () => {
    return (
        <Aside>
            <div className="logo">
                <img src="" alt="" className="logo__img" />
            </div>
            <nav className="nav">
                <a href="#" className="nav__link">Главная</a>
                <a href="#" className="nav__link">Мои работы</a>
                <a href="#" className="nav__link">Пет-проекты</a>
                <a href="#" className="nav__link">Контакты</a>
            </nav>
            <p className="copyright">
                @Copyright. Rights not reserved. It's Just Web-Site
            </p>
        </Aside>
    )
}

export default Sidebar

const Aside = styled.aside`
    transform: translateX(-100%);
    background: #000;
    border-right: 3px dashed rebeccapurple;
    @media (min-width: 990px) {
        transform: translateX(0);
    }
`
