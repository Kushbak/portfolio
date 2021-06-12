import styled from 'styled-components'
import instagramIcon from '../../assets/img/icons/instagram.svg'
import twitterIcon from '../../assets/img/icons/twitter.svg'
import telegramIcon from '../../assets/img/icons/telegram.svg'
import linkedinIcon from '../../assets/img/icons/linkedin.svg'
import githubIcon from '../../assets/img/icons/github.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChangeEvent } from 'react'

type Sidebar = {
    isSidebarOpen: boolean
}

const Sidebar: React.FC<Sidebar> = (props: Sidebar) => {
    const { t, i18n } = useTranslation()
    const onLangChange = (e: ChangeEvent<HTMLSelectElement>) => i18n.changeLanguage(e.target.value)

    return (
        <Aside isSidebarOpen={props.isSidebarOpen}>
            <Logo to='/'>Mamytov Kushbak</Logo>
            <Nav>
                <NavItem to="/" exact>{t('Home')}</NavItem>
                <NavItem to="/works">{t('My works')}</NavItem>
                <NavItem to="/petProjects">{t('Pet-projects')}</NavItem>
                {/* <NavItem to="/contacts">{t('Contacts')}</NavItem> */}
            </Nav>
            <Links>
                <a href="https://instagram.com/ku5hbak" target='_blank' rel='noopener noreferrer' >
                    <img src={instagramIcon} alt="instagram" />
                </a>
                <a href="https://twitter.com/crazykyrgyz" target='_blank' rel='noopener noreferrer' >
                    <img src={twitterIcon} alt="twitter" />
                </a>
                <a href="https://t.me/mamytovv" target='_blank' rel='noopener noreferrer' >
                    <img src={telegramIcon} alt="telegram" />
                </a>
                <a href="https://linkedin.com/in/mamytov" target='_blank' rel='noopener noreferrer' >
                    <img src={linkedinIcon} alt="linkedin" />
                </a>
                <a href="https://github.com/Kushbak" target='_blank' rel='noopener noreferrer' >
                    <img src={githubIcon} alt="github" />
                </a>
            </Links>
            <Languages>
                <Select name="lang" onChange={onLangChange} defaultValue={i18n.language}>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </Select>
            </Languages>
        </Aside>
    )
}

export default Sidebar

const Aside = styled.aside<Sidebar>`
    min-width: 250px;
    max-width: 350px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    min-height: 100vh;
    background: #000;
    border-right: 3px dashed rebeccapurple;
    transition: transform 0.4s ease-in-out;
    transform: translateX(
        ${p => p.isSidebarOpen ? '0' : '-100%'}
    );
    z-index: 10;
    @media (min-width: 900px) {
        transform: translateX(0);
        width: 25%;
        position: sticky;
    }
`

const Logo = styled(NavLink)`
    display: inline-block;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-family: 'Indie Flower', Arial, sans-serif;
    margin: 2em 1em;
    color: rebeccapurple;
    transition: color 0.2s linear;
    &:hover {
        color: #fff;
    }
`
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

const NavItem = styled(NavLink)`
    padding: 0.6em 0 1em;
    margin-bottom: 1em;
    &.active:after {
        width: 50%;
    }
    &:after {
        content: '';
        width: 0%;
        display: block;
        height: 2px;
        margin-top: 3px;
        background-color: rebeccapurple;
        transition: all 0.2s ease-in-out;
    }
    &:hover::after {
        width: 50%;
    }
`

const Links = styled.p`
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > a {
        max-width: 25px;
        width: 100%;
    }
    & > img {
        width: 100%;
    }
`

const Languages = styled.div`
    padding: 2em;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
`

const Select = styled.select`
    border: 1px solid rebeccapurple;
    border-radius: 3px;
    padding: 0.6em;
    max-height: 40px;
    height: 100%;
    background: transparent;
    color: #fff;
`