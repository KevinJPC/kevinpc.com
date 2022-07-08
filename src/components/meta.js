import React from "react";
import { Helmet } from "react-helmet";

const Meta = () => <Helmet htmlAttributes={{ lang: 'es' }}>
    <meta charSet="utf-8" />
    <meta name="description" content="Kevin es un un desarrollador web enfocado en trabajar principalmente en el frontend pero también el backend de aplicaciones web. Amante de la tecnología." />
    <meta name="keywords" content="Web, Desarrollador, Frontend, Backend" />
    <meta name="author" content="Kevin Pitti Castro" />
    <title>Kevin Pitti Castro | Desarrollador web</title>
    <link rel="canonical" href="https://kevinpc.com" />
    <meta property="og:title" content="Kevin Pitti Castro | Desarrollador web" />
    <meta property="og:image" content="https://kevinpc.com/og.png" />
    <meta property="og:type" content="website" />
    <meta property='og:url' content="https://kevinpc.com" />
</Helmet>

export default Meta