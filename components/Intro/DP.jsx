import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import React from 'react';
import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const boxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [0, 1],
    boxShadow: '5px 5px 10px rgb(0,0,0)',
  },
};
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export default function DP() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
        }}
        variants={variants}
        initial='hidden'
        animate='visible'
      >
        <motion.div style={rect1} variants={boxVariants}>
          Amazing
        </motion.div>
        <motion.div style={rect2} variants={boxVariants}>
          Productive
        </motion.div>
        <motion.div style={rect3} variants={boxVariants}>
          Efficient
        </motion.div>
        <motion.div
          style={rect4}
          variants={boxVariants}
          whileHover={{
            scale: 1.1,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

const rect1 = {
  width: '100px',
  height: '100px',
  backgroundColor: '#003D5C',
  position: 'absolute',
  borderRadius: '10px',
  fontSize: '1.25em',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
};

const rect2 = {
  width: '150px',
  height: '150px',
  backgroundColor: '#A5A5A5',
  position: 'absolute',
  borderRadius: '10px',
  left: '50px',
  top: '50px',
  fontSize: '1.25em',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
};

const rect3 = {
  width: '200px',
  height: '200px',
  backgroundColor: '#00141F',
  position: 'absolute',
  borderRadius: '10px',
  left: '100px',
  top: '100px',
  fontSize: '1.25em',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
};

const rect4 = {
  width: '350px',
  height: '350px',
  backgroundColor: '#CED4DA',
  position: 'absolute',
  borderRadius: '10px',
  left: '150px',
  top: '150px',
  // backgroundImage: 'url(./shafi-dp.png)',
  backgroundSize: 'cover',
  fontSize: '1.25em',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
};
