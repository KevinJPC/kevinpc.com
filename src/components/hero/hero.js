import React from "react"
import styled from "styled-components"
import siteData from "@content/sitedata.json"
import { motion } from "framer-motion"
import Animation from "@components/animation"

const StyledHero = styled.div`
    height: ${props => props.stateAnimation === 'idle' ? 'calc(100vh - 4em)' : '100vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const Container = styled.div`
    width: 100%;
`

const StyledGreeting = styled.div`
    margin-bottom: 1em;
    text-align: center;
    h1 {
        color: ${siteData.colors.white};
        font-size: calc(1.8em + 1vw);
        margin-top: 0.1em;
    }

    h3 {
        color: ${siteData.colors.gray};
        margin-top: 0.5em;
        font-size: calc(1.1em + 1vw);
    }
`

const StyledButton = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    a { 
        text-decoration: none;
        cursor: pointer;
        font-size: 1.1em;
        color: ${siteData.colors.gray};
        width: fit-content;
        padding: 0.5em 0.8em;
        border: none;
        background: linear-gradient(111deg, rgba(6,66,102,1) 15%, rgba(4,99,120,1) 85%);
        background-repeat: no-repeat;
        background-size: 75% 0.2em;
        background-position: 50% 100%;
        transition: all 0.25s ease-out;
    &:hover {
        background-size: 100% 0.2em;
        color: ${siteData.colors.white};
    }
}
`

const Hero = ({ setStateAnimation, stateAnimation }) => {

    const variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: 10, opacity: 0 },
    }

    return (
        <StyledHero stateAnimation={stateAnimation}>
            <Container>
                <Animation setStateAnimation={setStateAnimation} />
                {stateAnimation === 'idle' ? (
                    <>
                        <StyledGreeting as={motion.div}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <h1>Hola, soy Kevin Pitti Castro</h1>
                            <h3>Desarrollador web</h3>
                        </StyledGreeting>
                        <StyledButton as={motion.div}
                            initial="hidden"
                            animate="visible"
                            variants={variants}>
                            <a href="#contact">Contáctame</a>
                        </StyledButton>
                    </>
                ) : null}

            </Container>
        </StyledHero>

    )
}

export default Hero