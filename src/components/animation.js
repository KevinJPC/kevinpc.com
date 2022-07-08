import React, { useEffect, useState } from 'react';
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';
import AnimationLogo from "./../animations/animation_copy (6).riv"
import styled from 'styled-components';
import { device } from "@components/mediaqueries";

const StyledAnimation = styled.div`

    @media ${device.desktop}, ${device.laptopL} {
        height: 30em;

    }

    @media ${device.laptop}, ${device.tablet} {
        height: 25em;

    }

    @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        height: 19em;
    }
`

const Animation = ({ setStateAnimation }) => {

    const [maxWidth, setMaxWidth] = useState();
    const [maxHeight, setMaxHeight] = useState();

    const stateMachine = 'state_machine';

    const { rive, RiveComponent } = useRive({
        src: AnimationLogo,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.TopCenter,
        }),
        stateMachines: stateMachine,
        autoplay: true,
        onStateChange: (e) => {
            if (e.data[0] === 'idle') setStateAnimation('idle')
        }
    });

    const xAxisInput = useStateMachineInput(
        rive,
        stateMachine,
        'xAxis',
        35
    );

    const yAxisInput = useStateMachineInput(
        rive,
        stateMachine,
        'yAxis',
        20
    );

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) {
            const bodyRect = body.getBoundingClientRect();
            setMaxWidth(bodyRect.right);
            setMaxHeight(bodyRect.bottom);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
                
            if (xAxisInput && yAxisInput && maxHeight && maxWidth) {

                setTimeout(() => {
                    xAxisInput.value = (e.x / maxWidth) * 100;
                    yAxisInput.value = (e.y / maxHeight) * 100;

                }, 150)
            }
        };
        
        if (maxWidth > 768) window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.addEventListener('mousemove', handleMouseMove);
        }
    }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

    return (
        <StyledAnimation>
            <RiveComponent
                role="img"
            />
        </StyledAnimation>

    );
}

export default Animation