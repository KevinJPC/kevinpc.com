import React from "react"
import { createGlobalStyle } from "styled-components"
import siteData from "@content/sitedata.json"

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Dosis', sans-serif;
    }

    body {
        background: ${siteData.colors.black};
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 4.4em;
    }

    body {
    min-height: 100vh;
    min-height: fill-available;
    min-height: -webkit-fill-available;
    }
    
    html {
        height: fill-available;
        height: -webkit-fill-available;
    }


    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: ${siteData.colors.gray} ${siteData.colors.black};
        }
    ::-webkit-scrollbar-track {
        background: ${siteData.colors.black};
    }
    /* Chrome, Edge, and Safari */
     ::-webkit-scrollbar {
        width: 0.85em;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${siteData.colors.gray};
        border-radius: 10px;
        border: 0.3em solid ${siteData.colors.black};
    }
`
const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default Layout