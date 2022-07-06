import styled from "styled-components"
import siteData from "@content/sitedata.json"

const StyledIcon = styled.svg`
    path {
        fill: ${siteData.colors.gray};
        text {
            tspan {
                color: transparent;  
            text-shadow: 0 0 0 red;
            }

        }
    }
`

export default StyledIcon