import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
export default function Play() {
  const slideAnimationVariants = {
    initial: { opacity: 0, y: 200 },
    animate: {
      opacity: 1,
      backgroundImage: 'linear-gradient(-60deg, #fc466b 50%, #3f5efb 50%)',
      x: [0, 100, 0],
      transform: ['translateX(-25%)', 'translateX(0)'],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        stiffness: 500,
        damping: 50,
      },
    },
  };
  return (
    <Box
      as={motion.div}
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'linear-gradient(-60deg, #fc466b 50%, #3f5efb 50%)',
      }}
      className='playground'
    >
      <Box
        as={motion.div}
        variants={slideAnimationVariants}
        initial='initial'
        animate='animate'
      />
      HELLO
    </Box>
  );
}
