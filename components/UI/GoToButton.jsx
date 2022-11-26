import { Button, Text, useColorMode } from '@chakra-ui/react';
import { useScroll } from 'framer-motion';
import 'boxicons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function GoToButton() {
  const { colorMode } = useColorMode();
  const [positionY, setPositionY] = useState(0);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log('Page scroll: ', latest);
      setPositionY(latest);
    });
  }, []);

  const buttonVariants = {
    initial: {
      x: -100,
    },
    show: {
      x: 0,
    },
    hidden: {
      opacity: 0,
    },
  };
  return positionY > 700 ? (
    <motion.span
      style={{
        position: 'fixed',
        bottom: '100px',
        left: '95%',
        backgroundColor: colorMode === 'dark' ? '#F1F1F1' : '#595959',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        cursor: 'pointer',
      }}
      variants={buttonVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <box-icon
        name='chevron-up'
        animation='fade-up'
        flip='horizontal'
      ></box-icon>
    </motion.span>
  ) : null;
}
