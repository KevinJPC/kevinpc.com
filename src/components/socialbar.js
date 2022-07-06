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

const StyledBar = styled.div`

    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}, ${device.tablet}  {
        display: flex;

    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobile}, ${device.tablet} {
        display: none;
    }

    flex-direction: column;

    position: fixed;
    left: 2em;
    top: calc(50vh - 5em);


    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        margin: 0.7em 0;
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

const SocialBar = () => {
    return (
        <StyledBar
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { x: 0, opacity: 1, },
                hidden: { x: -10, opacity: 0 },
            }}>
            <motion.a whileHover={{ y: -3 }} alt='email icon' href={socials.email.url}><Mail /></motion.a>
            <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='github icon' href={socials.github.url}><Github /></motion.a>
            <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='instagram icon' href={socials.instagram.url}><Instagram /></motion.a>
            <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='twitter icon' href={socials.twitter.url}><Twitter /></motion.a>
            <motion.a whileHover={{ y: -3 }} target='_blank' rel='noreferrer' alt='linkedin icon' href={socials.linkedin.url}><Linkedin /></motion.a>
        </StyledBar>

    )
}

export default SocialBar