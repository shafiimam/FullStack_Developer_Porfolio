import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../UI/Logo';
import { useDimensions } from './use-dimension';
import { MobileNav } from './Mobilenav';
import DarkIcon from '../UI/DarkIcon';
import LightIcon from '../UI/LightICon';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    return () => {};
  }, []);

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const controlShow = () => {
    if (window.innerWidth <= 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', controlShow);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', controlShow);
    };
  }, []);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleNavigation = (links, link) => {
    console.log(links, link);
    window.scrollTo({
      top: document.getElementById(links[link])?.offsetTop + 100,
      behavior: 'smooth',
    });
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {isMobile ? (
        <Box display={'flex'} justifyContent='center'>
          <Logo />
          <motion.nav
            initial={false}
            whileInView={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div variants={sidebar} />
            <MobileNav />
          </motion.nav>
        </Box>
      ) : (
        <motion.nav
          variants={variants}
          initial={show ? 'hidden' : 'visible'}
          animate={!show ? 'visible' : 'hidden'}
          exit='exit'
          as='nav'
          style={{
            padding: '20px 50px',
            display: 'flex',
            position: 'fixed',
            top: 0,
            justifyContent: 'flex-end',
            width: '100%',
            transition: 'all 0.5s ease',
            backdropFilter: 'blur(10px)',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Box mr='auto'>
            <Logo />
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            {Object.keys(links).map((link, index) => {
              return (
                <motion.div
                  key={index}
                  style={{
                    margin: '0 1rem',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  whileHover={{
                    scale: 1.2,
                  }}
                  className='nav-link'
                  onClick={() => handleNavigation(links, link)}
                >
                  <span>{link}</span>
                </motion.div>
              );
            })}
            {colorMode === 'light' ? (
              <DarkIcon toggleColorMode={toggleColorMode} />
            ) : (
              <LightIcon toggleColorMode={toggleColorMode} />
            )}
          </Box>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
const variants = {
  hidden: {
    x: [0, 200],
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      stiffness: 700,
    },
  },
  exit: {
    x: [0, 200],
    opacity: 0,
  },
};
const links = {
  Home: '/',
  About: 'about',
  Projects: 'projects',
  Blogs: 'blogs',
};
