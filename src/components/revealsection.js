import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const RevealSection = ({ children, ...props}) => {
    const sectionRef = useRef();
    useEffect(() => {
        if (sectionRef.current)
        ScrollReveal().reveal(sectionRef.current, {
                reset: false,
                delay: 500
            });
    }, []);

    return (
        <section
            ref={sectionRef}
            // style={style}
            className="container scroll-section"
            data-testid="section"

            {...props}
        >
            {children}
        </section>
    );
};

export default RevealSection;