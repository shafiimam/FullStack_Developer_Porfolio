import React from 'react';
import { items } from './data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import pImg from '../../assets/a.jpg';
import { Image } from '@chakra-ui/react';
function Card({ id, title, category, theme, setProjectId }) {
  return (
    <li
      className={`card ${theme}`}
      onClick={() => {
        setProjectId(id);
      }}
    >
      <div className='card-content-container'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <Image className='card-image' src='a.jpg' alt='' />
          </motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <span className='category'>{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <span></span>
    </li>
  );
}

export function List({ selectedId, setProjectId }) {
  return (
    <ul className='card-list'>
      {items.map((card) => (
        <Card
          key={card.id}
          {...card}
          isSelected={card.id === selectedId}
          setProjectId={setProjectId}
        />
      ))}
    </ul>
  );
}
