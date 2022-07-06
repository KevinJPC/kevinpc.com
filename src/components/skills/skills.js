import React from "react";
import styled from "styled-components";
import siteData from "@content/sitedata.json"
import HtmlIcon from "@components/icons/technologies/htmlicon"
import CssIcon from "@components/icons/technologies/cssicon"
import JavascriptIcon from "@components/icons/technologies/javascripticon"
import ReactIcon from "@components/icons/technologies/reacticon"
import ReduxIcon from "@components/icons/technologies/reduxicon"
import GatsbyIcon from "@components/icons/technologies/gatsbyicon"
import WebpackIcon from "@components/icons/technologies/webpackicon"
import MysqlIcon from "@components/icons/technologies/mysqlicon"
import SqlserverIcon from "@components/icons/technologies/sqlservericon"
import StyledComponentsIcon from "@components/icons/technologies/styledcomponentsicon"
import BootstrapIcon from "@components/icons/technologies/bootstrapicon"
import PythonIcon from "@components/icons/technologies/pythonicon"
import FlaskIcon from "@components/icons/technologies/flaskicon"
import GitIcon from "@components/icons/technologies/giticon"
import ReactTooltip from 'react-tooltip';
import { device } from "@components/mediaqueries";

const StyledSkills = styled.div`
    min-height: calc(100vh - 4em);
    height: auto;
    width: 100%;

    /* media queries */
    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS}, ${device.tablet} {
        margin-bottom: 4em;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        color: ${siteData.colors.white};
        font-size: calc(1.1em + 1vw);
        margin-bottom: 1em;
    }

    p{
        font-size: 1em;
        color: ${siteData.colors.gray};
        line-height: 1.5em;
    }
`

const Technologies = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 3em;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* media queries */
    @media ${device.desktop}, ${device.laptopL}, ${device.laptop}, ${device.tablet} {
        column-gap: 4em;
    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        column-gap: 2em;
    }
    row-gap: 2em;
    justify-content: center;

    div {
        text-align: center;
    }
`



const Skills = () => {

    return (
        <StyledSkills>
            <h1>Qué puedo hacer</h1>
            <p>Estas son algunas de las tecnologías y herramientas que he estado utilizando recientemente y con las que puedo construir el frontend y/o backend de aplicaciones web:</p>
            <Technologies>
                <div data-tip="HTML5">
                    <HtmlIcon />
                </div>
                <div data-tip="CSS3">
                    <CssIcon />
                </div>
                <div data-tip="JavaScript">
                    <JavascriptIcon />
                </div>
                <div data-tip="React">
                    <ReactIcon />
                </div>
                <div data-tip="Redux">
                    <ReduxIcon />
                </div>
                <div data-tip="Gatsby">
                    <GatsbyIcon />
                </div>
                <div data-tip="Webpack">
                    <WebpackIcon />
                </div>
                <div data-tip="MySQL">
                    <MysqlIcon />
                </div>
                <div data-tip="SQL Server">
                    <SqlserverIcon />
                </div>
                <div data-tip="Styled Components">
                    <StyledComponentsIcon />
                </div>
                <div data-tip="Bootstrap">
                    <BootstrapIcon />
                </div>
                <div data-tip="Python">
                    <PythonIcon />
                </div>
                <div data-tip="Flask">
                    <FlaskIcon />
                </div>
                <div data-tip="Git">
                    <GitIcon />
                </div>
                <ReactTooltip />

            </Technologies>
        </StyledSkills>
    )
}

export default Skills
