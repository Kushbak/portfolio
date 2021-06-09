import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <NotFoundContainer>
            <p>{t("404")}</p>
        </NotFoundContainer>
    )
}

export default NotFound

const NotFoundContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #111;
    font-size: 3rem;
    color: rebeccapurple;
`