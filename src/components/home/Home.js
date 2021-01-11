import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Home = () => {    
    return (
        <motion.div className="home container"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
        >
            <Link to="/stories">
                <motion.button
                    animate={{  }}
                >
                    To Stories
                </motion.button>
            </Link>
            <Link to="/pieces">
                <motion.button
                    animate={{  }}
                >
                    To Pieces
                </motion.button>
            </Link>
            <Link to="/bits">
                <motion.button
                    animate={{  }}
                >
                    To Bits
                </motion.button>
            </Link>
            <Link to="/about">
                <motion.button
                    animate={{  }}
                >
                    About
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home