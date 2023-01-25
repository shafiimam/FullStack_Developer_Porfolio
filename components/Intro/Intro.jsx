import {
  Box,
  Text,
  chakra,
  shouldForwardProp,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  isValidMotionProp,
  useAnimation,
  useScroll,
} from 'framer-motion';
import DP from './DP';
import Hero from '../Hero/Hero';

export default function Intro() {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: [0, 0.5, 1, 0.5, 1],
      x: [100, 0, 100, 0],
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        when: 'beforeChildren',
        delayChildren: 2,
        mass: 0.8,
        damping: 8,
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // console.log(latest);

      if (latest < 600) {
        controls.start('visible');
      }
      if (latest > 600) {
        controls.start('hidden');
      }
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Box
        as={motion.div}
        m={['10% 2%', '0 0%', '0% 0%']}
        mt={['10%', '10%', '20%']}
        p={['0 20px', '0 40px', '0 20%']}
        id='intro'
        display='flex'
        flexFlow={['column', 'column', 'row-reverse']}
        flexDir={['column', 'column', 'row']}
        height={['600px', '600px', '700px']}
        gap='20px'
        overflow={['hidden', 'hidden', 'hidden']}
        variants={boxVariants}
        animate={controls}
      >
        <ChakraBox
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          width={['100%', '100%', '50%']}
        >
          <Text
            as={motion.p}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            style={{
              fontSize: '2em',
              background:
                '-webkit-linear-gradient(0deg, #0b77d6 0%, #e00d57 66%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '10px',
            }}
          >
            Hi,This is
          </Text>
          <Text
            as={motion.p}
            variants={variants}
            sx={{
              fontSize: '2.5em',
              color:
                colorMode === 'dark' ? 'brand.light.500' : 'brand.dark.500',
            }}
          >
            Shafi Imam.
          </Text>
          <Text
            as={motion.p}
            variants={variants}
            sx={{
              fontSize: ['1.5em', '1.5em', '2em', '2em', '2em'],
              color:
                colorMode === 'dark' ? 'brand.light.300' : 'brand.dark.300',
              lineHeight: '1.2em',
            }}
          >
            I develop applications for web.
          </Text>
          <Text
            as={motion.p}
            variants={variants}
            sx={{
              fontSize: ['1.2em', '1.2em', '1.5em'],
              color:
                colorMode === 'dark' ? 'brand.light.200' : 'brand.dark.100',
              width: ['100%', '100%', '80%'],
            }}
          >
            I am a full stack engineer specializing in building amazing web
            applications. I have experience working with a wide range of
            technologies and frameworks. I am working as a full stack engineer
            at{' '}
            <Text as='a' color='teal.400'>
              Sprin Rain
            </Text>
            .
          </Text>
        </ChakraBox>
        <Box
          width={['100%', '100%', '50%']}
          height={['400px', '600px']}
          display='flex'
          justifyContent='center'
        >
          <DP />
        </Box>
      </Box>
    </AnimatePresence>
  );
}
