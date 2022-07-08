import React, { useState, useEffect } from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import Logo from "@components/icons/logo/logo"
import { device } from "@components/mediaqueries";
import MenuBars from "./icons/navbar/menubars";
import MenuCollapse from "./icons/navbar/menucollapse";
import { motion } from "framer-motion";


const Nav = styled.nav`
    height: auto;
    width: 100%;

    position: fixed;
    top: 0;

    ul {
        list-style: none;
    }
    
    z-index: 2;

    /* When scroll is on top hide */
    ${props => (props.isOnTop === false && props.menuIsCollapse) ?
        'box-shadow: inset 0 -1px 0 0 hsla(0,0%,100%,.2);'
        : null}
        
    transition: background 0.2s ease-in;

    background: ${props => !props.menuIsCollapse ? 'rgba(0,0,0,0.7)' : 'rgba(rgba(0, 0, 0, 0.5))'};

    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    backdrop-filter:saturate(100%) blur(20px);
`

const Anchor = styled.a`
    color: ${props => props.active === true ? siteData.colors.white : siteData.colors.gray};
    text-decoration: none;
    :hover {
        color: ${siteData.colors.white}
    }
`

const StyledLogo = styled.div`
    width: 86.27px;
`

const LargeNav = styled.div`

    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop} {
        display: flex;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobile}, ${device.tablet} {
        display: none;
    }

    ul {
        max-width: 25em;
        width: 30%;
        
        display: flex;
        justify-content: space-between;
    }
`

const ContainerLargeNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4.4em;
    padding: 0 2em;
`

const SmallNav = styled.div`
    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}  {
        display: none;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobile}, ${device.tablet} {
        display: block;
    }
    width: 100%;
    height: auto;
`

const ContainerSmallNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4.4em;
    padding: 0 2em;

    button {
        border: none;
        background-color: transparent;
    }
`

const ContainerSections = styled.div`
    height: calc(100vh + 4em);
    display: ${props => props.menuIsCollapse ? 'none' : 'block'};
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.25em;
        margin: 2em 0;
        li {
            margin: 0.8em 0;
        }
    }

`



const sections = siteData.sections;

const Navbar = ({ section }) => {

    const [isOnTop, setIsOnTop] = useState(true);
    const [menuIsCollapse, setMenuIsCollapse] = useState(true);

    const handleScrollToTop = () => {
        if (window.scrollY === 0) {
            setIsOnTop(true)
        }
        if (window.scrollY > 0) {
            setIsOnTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScrollToTop());

        return () => {
            window.removeEventListener("scroll", (e) => handleScrollToTop());
        }
    }, [])

    return (
        <Nav isOnTop={isOnTop} menuIsCollapse={menuIsCollapse}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -10, opacity: 0 },
                }}>

                <LargeNav>
                    <ContainerLargeNav>
                        <StyledLogo>
                            <a href='/' alt='logo'><Logo /></a>
                        </StyledLogo>

                        <ul>
                            <li><Anchor href={sections.about.url} active={section === sections.about.url ? true : false} >{sections.about.name}</Anchor></li>
                            <li><Anchor href={sections.skills.url} active={section === sections.skills.url ? true : false} >{sections.skills.name}</Anchor></li>
                            <li><Anchor href={sections.projects.url} active={section === sections.projects.url ? true : false} >{sections.projects.name}</Anchor></li>
                        </ul>

                        <div>
                            <Anchor href={sections.contact.url} active={section === sections.contact.url ? true : false} >{sections.contact.name}</Anchor>
                        </div>
                    </ContainerLargeNav>
                </LargeNav>

                <SmallNav>
                    <ContainerSmallNav>
                        <StyledLogo>
                            <a href='/' alt='logo'><Logo /></a>
                        </StyledLogo>

                        <div>
                            <button onClick={() => setMenuIsCollapse(!menuIsCollapse)}>
                                {menuIsCollapse ? <MenuBars /> : <MenuCollapse />}
                            </button>
                        </div>
                    </ContainerSmallNav>

                    {menuIsCollapse ? null :
                        <ContainerSections
                            as={motion.div}
                        >
                            <motion.ul>
                                <motion.li
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
                                        hidden: { opacity: 0, y: 20, },
                                    }}
                                ><Anchor href={sections.about.url} active={section === sections.about.url ? true : false} onClick={() => setMenuIsCollapse(!menuIsCollapse)}>{sections.about.name}</Anchor></motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.10 } },
                                        hidden: { opacity: 0, y: 20, },
                                    }}><Anchor href={sections.skills.url} active={section === sections.skills.url ? true : false} onClick={() => setMenuIsCollapse(!menuIsCollapse)}>{sections.skills.name}</Anchor></motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.20 } },
                                        hidden: { opacity: 0, y: 20, },
                                    }}><Anchor href={sections.projects.url} active={section === sections.projects.url ? true : false} onClick={() => setMenuIsCollapse(!menuIsCollapse)}>{sections.projects.name}</Anchor></motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.30 } },
                                        hidden: { opacity: 0, y: 20, },
                                    }}><Anchor href={sections.contact.url} active={section === sections.contact.url ? true : false} onClick={() => setMenuIsCollapse(!menuIsCollapse)}>{sections.contact.name}</Anchor></motion.li>
                            </motion.ul>
                        </ContainerSections>}
                </SmallNav>
            </motion.div>
        </Nav >

    )
}

export default Navbar