const size = {
    mobileS: '326px',
    mobileM: '376px',
    mobileL: '426px',
    tablet: '769px',
    laptop: '1025px',
    laptopL: '1441px',
    desktop: '2561px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
};

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// // XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { ... }