import React from "react";
import styled from "styled-components";
import Section from "@components/icons/sections/section";
import siteData from "@content/sitedata.json"
import { motion } from "framer-motion";
import { device } from "@components/mediaqueries";

const sections = siteData.sections;

const StyledBar = styled.div`

    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}  {
        display: flex;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobile}, ${device.tablet} {
        display: none;
    }

    flex-direction: column;
    align-items: center;
    
    position: fixed;
    right: 2em;
    top: calc(50vh - 2.5em);

    a {
        display: flex;
        align-items: center;
        padding: 0.3em 0;
        
        :hover {
            svg {
                circle, path {
            fill: ${siteData.colors.white};
            }
        }
    }
    }
`

const SectionBar = ({ section }) => {
    return (
        <StyledBar
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { x: 0, opacity: 1, },
                hidden: { x: 10, opacity: 0 },
            }}>
            <motion.a whileHover={{ y: -3 }} href={sections.hero.url} alt="circle icon" ><Section active={section === sections.hero.url} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href={sections.about.url} alt="circle icon" ><Section active={section === sections.about.url} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href={sections.skills.url} alt="circle icon" ><Section active={section === sections.skills.url} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href={sections.projects.url} alt="circle icon" ><Section active={section === sections.projects.url} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href={sections.contact.url} alt="circle icon" ><Section active={section === sections.contact.url} /></motion.a>
        </StyledBar>

    )
}

export default SectionBar