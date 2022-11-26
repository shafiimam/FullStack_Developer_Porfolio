import * as React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const MenuItem = ({ i, links, handleNavigation }) => {
  const { colorMode } = useColorMode();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        color: colorMode === 'light' ? 'black' : 'white',
      }}
      onClick={() => handleNavigation(links[i])}
    >
      <Link href={links[i]}>{i}</Link>
    </motion.li>
  );
};
