import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  const text = "Islahia Arabic College - Sri Lanka";
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{
              marginRight: '5px',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#4A90E2', // Change to your preferred color
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
