import React from 'react'
import { motion } from "framer-motion"

const Bits = () => {
    return (
        <motion.div className="container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.25 }}
        >
            Bits
        </motion.div>
    )
}

export default Bits