import React, { useRef, useState } from 'react';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { Box, useOutsideClick, Text, background } from '@chakra-ui/react';
function Store() {
  const [id, setProjectId] = useState();
  const ref = useRef();
  const imageHasLoaded = true;
  useOutsideClick({
    ref: ref,
    handler: () => setProjectId(null),
  });

  return (
    <Box 
      as={motion.div}
      sx={{
        height:['500px','100vh','100vh'],
        overflow:['scroll','hidden','hidden'],
        border:['1px solid #000','none','none'],
        borderRadius:'10px',
        alignItems: 'center',
        overflow: ['scroll','','',],
        padding: '20px 40px',
      }}
    >
      <List selectedId={id} setProjectId={setProjectId} />
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
      <Box
        m={['10% 2%', '0 0%', '0 15%']}
        id='intro'
      >
        <AnimateSharedLayout type='crossfade'>
          <Text as='h2' textAlign='center' p='2' fontSize={'2xl'}>My Projects</Text>
          <Store />
        </AnimateSharedLayout>
      </Box>
    </motion.div>
  );
}
