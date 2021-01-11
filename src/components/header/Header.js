import React from 'react';
import { ImNewspaper } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: .5, type: 'spring', stiffness: 65 }}
      >
          <Link to="/">
            <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' }}}>
                <ImNewspaper />
            </IconContext.Provider>
          </Link>
      </motion.div>
      <motion.div className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: .5, type: 'spring', stiffness: 65 }}
      >
        <h1>Digital DBQ Database</h1>
      </motion.div>
    </header>
  )
}

export default Header;