import React, { useState } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
function Store() {
  const [id, setProjectId] = useState();
  const imageHasLoaded = true;
  console.log('project id selected', id);
  return (
    <>
      <List selectedId={id} setProjectId={setProjectId} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item id={id} key='item' setProjectId={setProjectId} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <Box
      m={['10% 2%', '0 0%', '15% 15%']}
      p={['0 20px', '0 40px']}
      id='intro'
      overflow={['hidden', 'hidden', 'hidden', 'hidden', 'hidden']}
    >
      <AnimateSharedLayout type='crossfade'>
        <Store />
      </AnimateSharedLayout>
    </Box>
  );
}
