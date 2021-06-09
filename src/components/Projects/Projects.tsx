import styled from "styled-components"
import codeIcon from '../../assets/img/icons/coding.svg'

type project = {
    id: number
    title: string
    link: string
    locale?: boolean
    description?: string
    stack?: string
    source?: string
}

type Props = {
    projects: project[]
    area: string
}


const Projects: React.FC<Props> = (props: Props) => {
    return (
        <ProjectsContainer>
            {props.projects.map(project => (
                <Project key={project.id}>
                    <ProjectImageWrapper>
                        <ProjectLink href={project.locale ? project.link + '/index.html' : project.link}>
                            <ProjectImage src={require(`../../assets/img/works/${props.area + project.id}.jpg`).default} alt={project.title} />
                        </ProjectLink>
                    </ProjectImageWrapper>
                    <ProjectDescription>
                        <Title href={project.locale ? project.link + '/index.html' : project.link}>{project.title}</Title>
                        <Description>{project.description || ''}</Description>
                        <AdditionInfo>
                            <p>
                                <b>Стэк:</b> {project.stack || ''}
                            </p>
                            { project.source 
                                && <a href={project.source}>
                                    <img src={codeIcon} alt="source code" />
                                </a>
                            }
                        </AdditionInfo>
                    </ProjectDescription>
                </Project>
            ))}
        </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    &::nth-child(2) {
        flex-direction: row-reverse;
    }
`
const Project = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    @media (min-width: 900px) {
        height: 350px;
        flex-direction: row;
        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }    
`
const ProjectImageWrapper = styled.div`
    overflow: hidden;
    max-height: 400px;
    @media (max-width: 1300px) and (min-width: 768px) {
        & img {
            height: 100%;
            object-fit: cover;
            object-position: 0 0;
        }
    }
    @media (min-width: 900px) { flex-basis: 50%; }
    @media (min-width: 500px) { max-height: 600px; }
`
const ProjectLink = styled.a`
    cursor: pointer;
    filter: brightness(0.4);
    transition: filter 0.3s linear;
    &:focus, &:hover {
        filter: brightness(0.6);
    }
`
const ProjectImage = styled.img`
    width: 100%;
    object-fit: cover;
`
const ProjectDescription = styled.div`
    padding: 4em 3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (min-width: 900px) {
        flex-basis: 50%;
    }
`
const Title = styled.a`
    font-size: 2rem;
    color: #eee;
    padding: 0.4em 0;
    transition: all 0.3s linear;
    &:hover, &:focus {
        color: #666;
    }
`
const Description = styled.p`
    color: #666;
    flex: 1;
    padding: 1.6em 0;
`
const AdditionInfo = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: rebeccapurple;
    width: 100%;
    & b {
        font-size: 0.9rem;
        margin-right: 0.3em;
    }
    & img { width: 30px; }
`