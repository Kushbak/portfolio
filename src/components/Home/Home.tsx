import styled from "styled-components"

const Home = (props: any) => {
    console.log(props)
    return (
        <HomeContainer>
            <H1>Mamytov Kushbak</H1>
            <h3>Суетолог в области веб-разработки</h3>
            <DescriptionBlock>
                <p>Добро пожаловать в мое портфолио</p>
                <p>Я веб-разработчик. Крутой такой разработчик. Убедиться можете перейдя в мои проекты</p>
            </DescriptionBlock>
        </HomeContainer>
    )
}

export default Home

const H1 = styled.h1`
    font-family: 'Indie Flower', Arial, sans-serif;
    text-transform: uppercase;
    font-size: 4rem;
`

const HomeContainer = styled.div`
    text-align: center;
    padding: 0 5%;
`

const DescriptionBlock = styled.div`
    font-size: 0.9rem;
    margin-top: 1em;
    & > p {
        margin-bottom: 0.3em;
    }
`