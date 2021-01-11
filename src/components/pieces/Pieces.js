import React from 'react'
import { motion } from "framer-motion"

const Pieces = () => {
    return (
        <motion.div className="container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.25 }}
        >
            Pieces
        </motion.div>
    )
}

export default Pieces