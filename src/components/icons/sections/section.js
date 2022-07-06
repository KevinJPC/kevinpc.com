import React from "react";
import StyledIcon from "@components/icons/styledicon";


const SectionActive = () => {
    return (
        <StyledIcon width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.5" cy="5.5" r="5" fill="#B2AAAA" stroke="#B2AAAA" />
        </StyledIcon>
    )
}

const SectionInactive = () => {
    return (
        <StyledIcon width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3" fill="#B2AAAA" stroke="#B2AAAA" />
        </StyledIcon>
    )
}

const Section = ({ active }) => {
    return (
        active === true ? <SectionActive /> : <SectionInactive />
    )
}

export default Section