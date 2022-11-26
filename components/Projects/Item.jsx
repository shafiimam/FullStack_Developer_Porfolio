import React from 'react';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum';
import { items } from './data';
import Link from 'next/link';
import pImg from '../../assets/a.jpg';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

export function Item({ id, setProjectId }) {
  const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{
          pointerEvents: 'auto',
          zIndex: 1,
          position: 'fixed',
          willChange: 'opacity',
          top: 0,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '990px',
        }}
        className='overlay'
        onClick={() => setProjectId(null)}
      >
        <Button>Close</Button>
      </motion.div>
      <div className='card-content-container open'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <Image className='card-image' src={pImg} alt='' />
          </motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <span className='category'>{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className='content-container' animate>
            <LoremIpsum
              p={2}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
