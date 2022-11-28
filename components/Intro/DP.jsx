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
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 0, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "5%"],
  },
};
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export default function DP() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraBox
        sx={{
          position: 'relative',
          width: '400px',
          zIndex:10
        }}
        variants={variants}
        initial='hidden'
        animate='visible'
      >
        <ChakraBox
          className='rectangle'
          sx={rect1}
          variants={boxVariants}
          whileHover={{
            x: 380,
            boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.25)',
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 50,
              duration: 1,
            },
          }}
        >
          Amazing
        </ChakraBox>
        <ChakraBox
          className='rectangle'
          sx={rect2}
          variants={boxVariants}
          whileHover={{
            x: 350,
            boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.25)',
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 50,
              duration: 1,
            },
          }}
        >
          Productive
        </ChakraBox>
        <ChakraBox
          className='rectangle'
          sx={rect3}
          variants={boxVariants}
          whileHover={{
            x: 350,
            boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.25)',
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 50,
              duration: 1,
            },
          }}
        >
          Efficient
        </ChakraBox>
        <ChakraBox
          className='rectangle'
          sx={rect4}
          variants={boxVariants}
          whileHover={{
            boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.25)',
          }}
        />
      </ChakraBox>
    </AnimatePresence>
  );
}

const rect1 = {
  width: ['70px', '75px', '100px'],
  height: ['70px', '75px', '100px'],
  backgroundColor: '#003D5C',
  position: 'absolute',
  borderRadius: '10px',
  fontSize: ['0.5rem', '1rem', '1.5rem'],
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: ['0', '0', '0', '0', '0'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rect2 = {
  width: ['80px', '120px', '150px'],
  height: ['80px', '120px', '150px'],
  backgroundColor: '#A5A5A5',
  position: 'absolute',
  borderRadius: '10px',
  left: ['18px', '18px', '21px'],
  top: ['10px', '10px', '10px'],
  fontSize: ['0.5rem', '1.5rem', '1.5rem'],
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rect3 = {
  width: ['120px', '150px', '200px'],
  height: ['120px', '150px', '200px'],
  backgroundColor: '#cfcfcf',
  position: 'absolute',
  borderRadius: '10px',
  left: ['35px', '35px', '40px'],
  top: ['28px', '28px', '33px'],
  fontSize: ['0.5rem', '1.5rem', '2rem'],
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rect4 = {
  width: ['180px', '200px', '300px'],
  height: ['180px', '200px', '300px'],
  backgroundColor: '#CED4DA',
  position: 'relative',
  borderRadius: '10px',
  left: ['53px', '53px', '60px'],
  top: ['48px', '48px', '66px'],
  backgroundImage: 'url(./shafi-dp.png)',
  backgroundSize: 'cover',
  fontSize: '1.25em',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
