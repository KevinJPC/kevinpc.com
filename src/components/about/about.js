import React from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "@components/mediaqueries";

const StyledAbout = styled.div`

    /* media queries */
    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        margin-bottom: 4em;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${siteData.colors.white};

    h1 {
        font-size: calc(1.1em + 1vw);
        margin: 1em 0;
    }
`

const Container = styled.div`
    display: flex;
    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}, ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        flex-direction: column-reverse;
    }
`

const StyledParagraph = styled.div`
    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}, ${device.tablet} {
        width: 65%;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        width: 100%;
    }
    
    p {
        /* font-size: calc(0.1em + 1vw); */
        font-size: 1em;
        color: ${siteData.colors.gray};
        margin-top: 1em;
        line-height: 1.5em;
        a{
            text-decoration: none;
            color: ${siteData.colors.oceanBlue};
        }
    }
`

const StyledImg = styled.div`
    width: 30%;

    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}, ${device.tablet} {
        width: 30%;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        width: 70%;
        margin: 0 auto 1em auto;
    }

    img {
        border-radius: 0.5em;
    }
`

const About = ({...props}) => {
    return (
        <StyledAbout {...props}>
            <h1>Quién soy</h1>
            <Container>
                <StyledParagraph>
                    <p>
                        ¡Hola de nuevo! Como lo mencioné antes mi nombre es Kevin.
                        Actualmente estoy estudiando informática empresarial en la <a href="https://www.ucr.ac.cr/" target="_blank" rel="noreferrer">Universidad de Costa Rica</a>.
                        También me gradué de <a href="https://4geeksacademy.com/" target="_blank" rel="noreferrer">4Geeks Academy</a> como desarrollador de software full stack
                    </p>
                    <p>
                        Me he enfocado en prepararme para trabajar principalmente en el frontend pero también en el backend con algunas de las tecnologías y herramientas más utilizadas en la actualidad.
                        Me encanta seguir aprendiendo, por lo tanto, intento mantenerme actualizado o al menos pendiente de las tendencias tecnológicas.
                    </p>
                    <p>
                        Aparte de programar, en mi tiempo libre realizo actividades como producir música, tocar el piano, ver fútbol e esports, practicar tenis de mesa, jugar videojuegos, entre otras.
                    </p>
                </StyledParagraph>

                <StyledImg>
                    <StaticImage src='./../../images/personal-photo.jpg' layout="fullWidth" alt="Kevin's photo" />
                </StyledImg>
            </Container>
        </StyledAbout>
    )
}

export default About