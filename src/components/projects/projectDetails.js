import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion";
import siteData from "@content/sitedata.json"
import styled from "styled-components";
import Close from "@components/icons/controls/close";
import Minimize from "@components/icons/controls/minimize";
import Maximize from "@components/icons/controls/maximize";
import { device } from "@components/mediaqueries";

const StyledModalWrapper = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: calc(100vh - 4em);
    width: 100vw;
    margin-top: 4em;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledModalContent = styled.div`

    @media ${device.desktop}{
        width: 45%;
    }

    @media ${device.laptopL}{
        width: 60%;
    }

    @media ${device.laptop} {
        width: 65%;
    }

    @media ${device.tablet} {
        width: 80%;
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.mobileS} {
        width: 90%;
    }

    min-height: 25em;
    height: auto;
    border: 1px solid ${siteData.colors.gray};
    border-radius: 0.5em;
    background-color: ${siteData.colors.black};
`

const StyledEditor = styled.div`
    
`

const StyledNavEditor = styled.div`
    width: 100%;
    height: 4.3em;
    border-bottom: 1px solid ${siteData.colors.gray};
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    align-items: center;
    padding: 0 1em;
`

const StyledControls = styled.div`
    display: flex;
    align-items: center;
    height: 3.5em;
    margin-top: 0.8em;
    div {

        display: flex;

        path {
                display: none;
            }

        :hover {
            path {
                display: block;
            }
        }
        
        button:active, a:active{
            filter: brightness(50%);
        }
    }

    button, a {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        margin: 0 0.3em;
        cursor: pointer;
    }

`

const StyledTab = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1em;
    background-color: ${siteData.colors.black};
    height: 3.5em;
    border: 1px solid ${siteData.colors.gray};
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom: 1px solid ${siteData.colors.black};
    margin-top: 1em;
    span {
        font-size: 1em;
        color: ${siteData.colors.gray};
    }
`

const StyledCode = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 0.5em;
    display: flex;
    flex-direction: row;
    /* font-size: 0.95em; */
    p {
        padding: 1em 0;
        color: ${siteData.colors.white};
        line-height: 1.5em;
        margin-left: 1.8em;
    }

    a{
        text-decoration: none;
        color: ${siteData.colors.white};
    }
`

const StyledLineNumbers = styled.div`
    position: absolute;
    color: ${siteData.colors.gray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    width: 2em;
    padding: 1em 0;
    div{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    span {
        text-align: end;
        line-height: 1.5em;
    }
`

const PLine = styled.span`
    color: ${props => props.color};
`

const ProjectDetails = ({ project, setSelectedId, selectedId }) => {
    const modalRef = useRef();
    const pRef = useRef();
    const lineNumbersRef = useRef();
    const [numLines, setNumLines] = useState(0)

    useEffect(() => {

        const handleAddLines = () => {
            let height = pRef.current.offsetHeight;
            let lineHeight = parseFloat((window.getComputedStyle(pRef.current)).getPropertyValue('line-height'));
            let numLines = Math.round(height / lineHeight) - 1;
            console.log(numLines)
            setNumLines(numLines)
        }

        handleAddLines()

        window.addEventListener("resize", handleAddLines)

        return () => {
            window.removeEventListener("resize", handleAddLines)
        }

    }, [])

    return (
        <StyledModalWrapper id="modal-wrapper" as={motion.div} onClick={(e) => { if (e.target.id === "modal-wrapper") setSelectedId(0); }}>
            <StyledModalContent ref={modalRef}
                as={motion.div}
                key="modal"
                layout={true}
                layoutId={selectedId}
            >
                <StyledEditor>
                    <StyledNavEditor as={motion.div}>
                        <StyledControls>
                            <div>
                                <button aria-label="Close" onClick={() => setSelectedId(0)} onKeyDown={() => setSelectedId(0)}><Close /></button>
                                <button aria-label="Minimize" onClick={() => setSelectedId(0)} onKeyDown={() => setSelectedId(0)}><Minimize /></button>
                                <a role="button" aria-label="Maximize" href={project.url} target="_blank" rel="noreferrer"><Maximize /></a>
                            </div>
                        </StyledControls>
                        <StyledTab><span>README.md</span></StyledTab>
                    </StyledNavEditor>

                    <StyledCode>
                        <StyledLineNumbers ref={lineNumbersRef}>
                            {numLines === 0 ?
                                null :
                                <div>
                                    {[...Array(numLines)].map((el, index) => <span key={index}>{index + 1}</span>)}
                                </div>
                            }
                        </StyledLineNumbers>
                        <motion.p ref={pRef}>
                            <PLine color={siteData.colors.red}>{'## ' + project.name}</PLine><br />
                            <br />
                            <PLine color={siteData.colors.white}>{project.description}</PLine><br />
                            <br />
                            <PLine color={siteData.colors.white}>{project.technologies}</PLine><br />
                            <br />

                            [🔗] <a href={project.url} target="_blank" rel="noreferrer">[<PLine color={siteData.colors.oceanBlue}> Sitio web </PLine>]</a>
                            <br />
                            [💻] <a href={project.repository} target="_blank" rel="noreferrer">[<PLine color={siteData.colors.oceanBlue}> Repositorio </PLine>]</a>

                        </motion.p>
                    </StyledCode>
                </StyledEditor>
            </StyledModalContent>
        </StyledModalWrapper>
    )
}

export default ProjectDetails