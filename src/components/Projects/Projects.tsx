import styled from "styled-components"

type project = {
    id: number
    title: string
    link: string
    locale?: boolean
    description?: string
    stack?: string
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
                        <Stack><b>Стэк:</b> {project.stack || ''}</Stack>
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
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
        height: 350px;
        flex-direction: row;
        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }    
`

const ProjectImageWrapper = styled.div`
    overflow: hidden;
    @media (min-width: 768px) {
        flex-basis: 50%;
    }
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
    @media (min-width: 768px) {
        flex-basis: 50%;
    }
`
const Title = styled.a`
    display: block;
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
const Stack = styled.p`
    font-size: 0.8rem;
    color: rebeccapurple;
    & > b {
        font-size: 0.9rem;
        margin-right: 0.3em;
    }
`