const Sidebar = () => {
    return (
        <aside>
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
        </aside>
    )
}

export default Sidebar
