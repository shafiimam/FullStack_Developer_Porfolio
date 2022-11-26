import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { MobileNavigationItems } from './MobileNavigationItems';
import { useDimensions } from './use-dimension';
import { useColorMode } from '@chakra-ui/react';

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { colorMode } = useColorMode();
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      backgroundColor: colorMode === 'light' ? '#F1F1F1' : '#595959',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      backgroundColor: colorMode === 'light' ? '#F1F1F1' : ['#595959', '#0000'],
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const handleNavigation = (element) => {
    console.log('scrolling to', element);
    window.scrollTo({
      top: document.getElementById(element)?.offsetTop + 100,
      behavior: 'smooth',
    });
    setTimeout(() => {
      toggleOpen();
    }, 300);
  };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar} />
      <MobileNavigationItems handleNavigation={handleNavigation} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
