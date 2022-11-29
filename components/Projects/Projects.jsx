import React, { useRef, useState } from 'react';
import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  LayoutGroup,
} from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { Box, useOutsideClick, Text, background } from '@chakra-ui/react';
import { useEffect } from 'react';
function Store() {
  const [id, setProjectId] = useState();
  const [galleryHeight, setGalleryHeight] = useState();
  const ref = useRef();
  const listRef = useRef();
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const imageHasLoaded = true;
  useOutsideClick({
    ref: ref,
    handler: () => setProjectId(null),
  });

  const galleryVariants = {
    initial: { opacity: 0, y: 200 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        stiffness: 500,
        damping: 50,
      },
    },
  };
  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest > 700) {
        controls.start('animate');
      }
      if (latest < 700) {
        controls.start('initial');
      }
    });
  }, [scrollY, controls]);
  useEffect(() => {
    setGalleryHeight(listRef?.current?.offsetHeight);
    return () => {
      setGalleryHeight(0);
    };
  }, []);

  const slideAnimationStyles = {
    height: `${galleryHeight + 50}px`,
  };
  console.log({ listRef, slideAnimationStyles });
  return (
    <Box
      as={motion.div}
      sx={{
        height: ['500px', '800px', '800px'],
        overflow: ['scroll', 'hidden', 'hidden'],
        alignItems: 'center',
        overflow: ['scroll', '', ''],
        padding: '20px 40px',
        position: 'relative',
      }}
      initial='initial'
      animate={controls}
      variants={galleryVariants}
    >
      <Box sx={slideAnimationStyles} className='slide'></Box>
      <Box sx={slideAnimationStyles} className='slide bg2'></Box>
      <Box sx={slideAnimationStyles} className='slide bg3'></Box>

      <div ref={listRef}>
        <List selectedId={id} setProjectId={setProjectId} />
      </div>
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item id={id} key={id} setProjectId={setProjectId} ref={ref} />
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function Projects() {
  return (
    <motion.div id='projects'>
      <Box m={['10% 2%', '0 0%', '0 15%']} p='2'>
        <LayoutGroup type='crossfade'>
          <Text as='h2' textAlign='center' p='2' fontSize={'2xl'}>
            My Projects Gallery
          </Text>
          <Store />
        </LayoutGroup>
      </Box>
    </motion.div>
  );
}
