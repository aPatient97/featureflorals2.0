import React from 'react'
import { motion } from 'framer-motion'
import './style.css'

function ImageCard({url, alt, id}) {
  
  return (
    
    <motion.div 
    layout 
    initial={ {opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="image-container" 
    key={id}>
          <motion.img src={url} alt={alt} key={id} />
      </motion.div>
        
  )
}

export default ImageCard

// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ transform: "translateX(100px)" }}
//transition={spring} animate={{ x: 10 }}
