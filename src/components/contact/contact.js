import React from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import { device } from "@components/mediaqueries";

const StyledContact = styled.div`
    height: calc(100vh - 5em);
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: calc(1.1em + 1vw);
        color: ${siteData.colors.white};
        margin-bottom: 1em;
    }

    p {
        line-height: 1.5em;
        font-size: 1em;
        color: ${siteData.colors.gray};
    }
`

const Container = styled.div`
    width: 50%;

    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}{
        width: 50%;
    }

    @media ${device.tablet} {
        width: 80%;
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.mobileS} {
        width: 100%;
    }
`

const StyledButton = styled.div`

    margin-top: 3em;
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
        background-size: 85% 0.2em;
        background-position: 50% 100%;
        transition: all 0.25s ease-out;
    &:hover {
        background-size: 100% 0.2em;
        color: ${siteData.colors.white};
    }
}
`

const Contact = ({...props}) => {
    return (
        <StyledContact {...props}>
            <Container>
                <h1>Contáctame</h1>
                <p>
                    {siteData.contact.description}
                </p>
                <StyledButton>
                    <a href={siteData.socials.email.url}>Comenzar a hablar</a>
                </StyledButton>
            </Container>
        </StyledContact>
    )
}

export default Contact