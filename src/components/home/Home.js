import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Home = () => {    
    return (
        <motion.div className="home container"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: .25, duration: 1 }}
        >
            <Link to="/stories">
                <motion.button
                    initial={{  }}
                    animate={{  }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >
                    To Stories
                </motion.button>
            </Link>
            <Link to="/pieces">
                <motion.button
                    initial={{  }}
                    animate={{  }}
                    transition={{ }}
                >
                    To Pieces
                </motion.button>
            </Link>
            <Link to="/bits">
                <motion.button
                    initial={{  }}
                    animate={{  }}
                    transition={{ }}
                >
                    To Bits
                </motion.button>
            </Link>
            <Link to="/about">
                <motion.button
                    initial={{  }}
                    animate={{ x: 20 }}
                    transition={{ }}
                >
                    About
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home