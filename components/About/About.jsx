import { Box, Text } from '@chakra-ui/react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useScroll,
} from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
export default function About() {
  const leftCardVariants = {
    initial: { opacity: 0, x: 1000 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        stiffness: 500,
        damping: 50,
      },
    },
  };
  const rightCardVariants = {
    initial: { opacity: 0, x: -1000 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        stiffness: 500,
        damping: 50,
      },
    },
  };
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  useEffect(() => {
    console.log('is in view', isInView);
    controls.start('animate');
  }, [isInView, controls]);
  return (
    <AnimatePresence exitBeforeEnter>
      <Box ref={containerRef} m={['10% 2%', '0 0%', '0 15%']} p='2'>
        <Text as='h1' fontSize='18px' textAlign='center'>
          Work History
        </Text>
        <Box
          as={motion.div}
          className='timeline about'
          animate={{
            opacity: 1,
            y: [200, 0],
          }}
          transition={{
            duration: 1,
            delay: 2,
            ease: 'easeInOut',
            when: 'beforeChildren',
          }}
        >
          <Box className='container left'>
            <Box
              as={motion.div}
              variants={leftCardVariants}
              initial='initial'
              animate={controls}
              className='content'
              bg='brand.light.500'
              color='brand.dark.500'
            >
              <h2>2022 | December - Current</h2>
              <p>Spring Rain Pvt Ltd</p>
            </Box>
          </Box>
          <Box className='container right'>
            <Box
              as={motion.div}
              variants={rightCardVariants}
              initial='initial'
              animate={controls}
              className='content'
              bg='brand.light.500'
              color='brand.dark.500'
            >
              <h2>2021 | Sept - November | 2022</h2>
              <p>DevsNest LLC</p>
            </Box>
          </Box>
          <Box className='container left'>
            <Box
              as={motion.div}
              variants={leftCardVariants}
              initial='initial'
              animate={controls}
              className='content'
              bg='brand.light.500'
              color='brand.dark.500'
            >
              <h2>2021 | July - August | 2021</h2>
              <p>CoreXLab Ltd</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  );
}
