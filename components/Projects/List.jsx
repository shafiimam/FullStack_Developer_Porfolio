import React from 'react';
import { items } from './data';
import { motion } from 'framer-motion';
import { Box, Image, ListItem, UnorderedList } from '@chakra-ui/react';
function Card({ id, title, category, theme, setProjectId, image }) {
  return (
    <ListItem
      as={motion.div}
      className={`card ${theme}`}
      onClick={() => {
        setProjectId(id);
      }}
      sx={{
        height: ['250px', '400px', '500px'],
        cursor: 'pointer',
        borderRadius: '10px',
      }}
      whileHover={{
        scale: 1.01,
        boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        as={motion.div}
        sx={{
          width: ['100%'],
          height: ['100%'],
          position: 'relative',
          display: 'block',
          pointerEvents: 'none',
          margin: ['30px', '0', '0'],
          borderRadius: '10px',
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
              src={image}
              alt=''
              objectFit='cover'
            />
          </motion.div>
          <Box
            as={motion.div}
            className='title-container'
            layoutId={`title-container-${id}`}
            sx={{
              position: 'absolute',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '10px',
              padding: '10px',
              width: '90px',
            }}
          >
            <span className='category'>{category}</span>
            <h2>{title}</h2>
          </Box>
        </motion.div>
      </Box>
      <span></span>
    </ListItem>
  );
}

export function List({ selectedId, setProjectId, ref }) {
  return (
    <UnorderedList className='card-list' ref={ref}>
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
