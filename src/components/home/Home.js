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
                    whileHover={{ 
                        scale: 1.1, 
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    To Stories
                </motion.button>
            </Link>
            <Link to="/pieces">
                <motion.button
                    initial={{  }}
                    whileHover={{ 
                        scale: 1.1, 
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                    }}
                    transition={{ }}
                >
                    To Pieces
                </motion.button>
            </Link>
            <Link to="/bits">
                <motion.button
                    initial={{  }}
                    whileHover={{ 
                        scale: 1.1, 
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                    }}
                    transition={{ }}
                >
                    To Bits
                </motion.button>
            </Link>
            <Link to="/about">
                <motion.button
                    initial={{  }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)" 
                        
                    }}
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