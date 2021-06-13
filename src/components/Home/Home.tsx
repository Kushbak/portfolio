import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Button } from "../Button/Button.style"

const Home = (props: any) => {
    const { t } = useTranslation()
    return (
        <HomeContainer>
            <H1>Mamytov Kushbak</H1>
            <h3>{t('Header text')}</h3>
            <DescriptionBlock>
                <p>{t('Welcome')}</p>
                <p>{t('About me')}</p>
                <Button href='https://t.me/mamytovv'>{t('Msg me')}</Button>
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
    padding: 1em 0;
    @media (min-width: 500px) {
        padding: 1em;
    }
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