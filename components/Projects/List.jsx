import React from 'react';
import { items } from './data';
import { motion } from 'framer-motion';
import { Box, Image, ListItem, UnorderedList } from '@chakra-ui/react';
function Card({ id, title, category, theme, setProjectId }) {
  return (
    <ListItem
      className={`card ${theme}`}
      onClick={() => {
        setProjectId(id);
      }}
    >
      <Box
        sx={{
          width: ['80%', '80%', '80%', '100%', '100%'],
          height: ['50%', '80%', '80%', '100%', '100%'],
          position: 'relative',
          display: 'block',
          pointerEvents: 'none',
          margin: '0 auto',
        }}
        className='card-content-container'
      >
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <Image
              height='100%'
              width='auto'
              className='card-image'
              src='a.jpg'
              alt=''
              objectFit='cover'
            />
          </motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <span className='category'>{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </Box>
      <span></span>
    </ListItem>
  );
}

export function List({ selectedId, setProjectId }) {
  return (
    <UnorderedList className='card-list'>
      {items.map((card) => (
        <Card
          key={card.id}
          {...card}
          isSelected={card.id === selectedId}
          setProjectId={setProjectId}
          theme={card.id === selectedId ? 'dark' : 'light'}
        />
      ))}
    </UnorderedList>
  );
}
