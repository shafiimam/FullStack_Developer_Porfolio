import React, { useRef, useState } from 'react';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { Box, useOutsideClick, Text } from '@chakra-ui/react';
function Store() {
  const [id, setProjectId] = useState();
  const ref = useRef();
  const imageHasLoaded = true;
  useOutsideClick({
    ref: ref,
    handler: () => setProjectId(null),
  });

  return (
    <>
      <List selectedId={id} setProjectId={setProjectId} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item id={id} key='item' setProjectId={setProjectId} ref={ref} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <motion.div id='projects'>
      <Box
        m={['10% 2%', '0 0%', '15% 15%']}
        id='intro'
        overflow={['hidden', 'hidden', 'hidden']}
      >
        <AnimateSharedLayout type='crossfade'>
          <Text as='h2'>My Projects</Text>
          <Store />
        </AnimateSharedLayout>
      </Box>
    </motion.div>
  );
}
