import React, { useState } from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "@components/projects/projectDetails";
import { device } from "@components/mediaqueries";


const StyledProjects = styled.div`
    min-height: calc(100vh - 4em);
    height: auto;

    /* media queries */
    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        margin-bottom: 4em;
    }


    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledTitles = styled.div`
    h1 {
        color: ${siteData.colors.white};
        font-size: calc(1.1em + 1vw);
        margin-bottom: 1em;
    }

    p {
        color: ${siteData.colors.gray};
        font-size: 1em;
        span {
            color: ${siteData.colors.oceanBlue};

        }
    }
`

const Container = styled.div`
    
    width: 100%;
    display: flex;

    /* media queries */
    @media ${device.desktop} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.laptopL} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        flex-direction: column;
        align-items: center;
    }
    flex-wrap: wrap;
    row-gap: 1em;

    margin-top: 2em;
`

const StyledProject = styled.div`
    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}{
        width: 33%;
        height: auto; 
    }

    @media ${device.tablet} {
        width: 48%;
        height: auto; 
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.mobileS} {
        width: 100%;
        height: auto; 
    }
    cursor: pointer;

    :hover {
        div {
            opacity: 1;
            transition: 0.5s;
        }
    }
`

const StyledVideo = styled.video`
    border-radius: 0.1em;
    width: 100%;
    height: 100%; 
`


const Projects = () => {

    const [selectedId, setSelectedId] = useState(0)

    return (
        <StyledProjects>
        <StyledTitles>
        <h1>Qué he construido</h1>
                <p>Estos son algunos proyectos personales que he desarrollado <span>¡Haz click en cualquiera para ver más información!</span></p>
        </StyledTitles>

            <Container>

                {siteData.projects.map((project, index) => {
                    return (
                            <StyledProject as={motion.div} 
                            key={index}
                            whileHover={{ y: -6 }}
                            layout={true}
                            layoutId={index + 1}
                            style={{ opacity: selectedId === (index + 1) ? 0 : 1 }}
                            onClick={() => setSelectedId(index + 1)}
                            >
                                <StyledVideo autoPlay muted loop disablePictureInPicture>
                                    <source src={project.demo} type="video/mp4" />
                                </StyledVideo>
                            </StyledProject>
                    )
                })}

                <AnimatePresence presenceAffectsLayout >
                    {selectedId && (
                        <ProjectDetails project={siteData.projects[selectedId - 1]} setSelectedId={setSelectedId} selectedId={selectedId} />
                    )}
                </AnimatePresence>
            </Container>
        </StyledProjects>
    )
}

export default Projects