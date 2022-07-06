import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Reveal = ({ children, inView }) => {
    const controls = useAnimation();

    const revealVariants = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView])

    return (
        <motion.div
            animate={controls}
            initial="hidden"
            variants={revealVariants}
        >
            {children}
        </motion.div>
    )
}

export default Reveal