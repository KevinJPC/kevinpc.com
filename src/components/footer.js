import React from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import Mail from "@components/icons/socials/mail";
import Github from "@components/icons/socials/github";
import Instagram from "@components/icons/socials/instagram";
import Linkedin from "@components/icons/socials/linkedin";
import Twitter from "@components/icons/socials/twitter";
import { motion, } from "framer-motion"
import { device } from "@components/mediaqueries";

const socials = siteData.socials;

const StyledFooter = styled.div`
    text-align: center;        
    height: 3em;

    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}{

        margin-top: -7em;
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.mobileS}, ${device.tablet}  {
        margin-top: -9.5em;
    }

a{
    font-size: 0.85em;
    color: ${siteData.colors.gray};
    text-decoration: none;
    :hover{
    color: ${siteData.colors.white};
    }
}
`

const Socials = styled.div`
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}{
        display: none;
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.mobileS}, ${device.tablet}  {
        display: flex;
    }

    flex-direction: row;
    justify-content: center;
    column-gap: 1.9em;
    margin-bottom: 1.5em;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        :hover {
            svg {
                circle, path {
            fill: ${siteData.colors.white};
            }
        }
    }
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Socials>
                <motion.a whileHover={{ y: -3 }} alt='email icon' href={socials.email.url}><Mail /></motion.a>
                <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='github icon' href={socials.github.url}><Github /></motion.a>
                <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='instagram icon' href={socials.instagram.url}><Instagram /></motion.a>
                <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='twitter icon' href={socials.twitter.url}><Twitter /></motion.a>
                <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='linkedin icon' href={socials.linkedin.url}><Linkedin /></motion.a>
            </Socials>
            <a href="https://github.com/KevinJPC" target="_blank" rel="noreferrer">
                Diseñado & desarrollado por Kevin Pitti
            </a>
        </StyledFooter>
    )
}

export default Footer