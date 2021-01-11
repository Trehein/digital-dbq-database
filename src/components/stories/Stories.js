import React from 'react'
import { motion } from "framer-motion"

const Stories = () => {
    return (
        <motion.div className="container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.25 }}
        >
            <h2>
                Stories
            </h2>
        </motion.div>
    )
}

export default Stories