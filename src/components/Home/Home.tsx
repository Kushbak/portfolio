import styled from "styled-components"
import telegramIcon from '../../assets/img/icons/telegram.svg'

const Home = (props: any) => {

    return (
        <HomeContainer>
            <H1>Mamytov Kushbak</H1>
            <h3>Суетолог в области веб-разработки</h3>
            <DescriptionBlock>
                <p>Добро пожаловать в мое портфолио</p>
                <p>Я веб-разработчик. Крутой такой разработчик. Убедиться можете перейдя в мои проекты</p>
                <Button href='https://t.me/mamytovv'>Напиши мне </Button>
            </DescriptionBlock>
        </HomeContainer>
    )
}

export default Home

const H1 = styled.h1`
    font-family: 'Indie Flower', Arial, sans-serif;
    text-transform: uppercase;
    font-size: 4rem;
    color: #eee;
`

const HomeContainer = styled.div`
    text-align: center;
    padding: 0 5%;
    color: #eee;
`

const DescriptionBlock = styled.div`
    font-size: 0.9rem;
    margin-top: 1em;
    & > p {
        margin-bottom: 0.3em;
    }
`

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 1em 4em;
    background: rebeccapurple;
    border-radius: 5px;
    transition: all 0.3s linear;
    color: #eee;
    &:hover {
        opacity: 0.8;
    }
`