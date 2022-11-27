import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react';
import theme from '../../theme';
export default function LightIcon({ toggleColorMode }) {
  const { colorMode } = useColorMode();
  const svgFill =
    colorMode === 'light'
      ? theme.colors.brand.dark['500']
      : theme.colors.brand.light['500'];
  return (
    <div onClick={toggleColorMode}>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        width='24px'
        height='24px'
      >
        <motion.path
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          initial={{
            opacity: 0,
            rotate: -45,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            pathLength: 1,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          exit={{ rotate: 0, opacity: 0 }}
        />
      </motion.svg>
    </div>
  );
}
