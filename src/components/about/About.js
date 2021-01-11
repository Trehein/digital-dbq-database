import React from 'react'
import { motion } from "framer-motion"


const About = () => {
    return (
        <motion.div className="base container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.25 }}
        >
            <h2>The About Page</h2>
        </motion.div>
    )
}

export default About