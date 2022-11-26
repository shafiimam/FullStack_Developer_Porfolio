import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavigationItems = ({ handleNavigation }) => (
  <motion.ul
    variants={variants}
    style={{
      padding: '25px',
      position: 'relative',
      top: '120px',
      right: '100px',
      width: '230px',
    }}
  >
    {Object.keys(links).map((i, index) => (
      <MenuItem
        i={i}
        index={index}
        key={i}
        links={links}
        handleNavigation={handleNavigation}
      />
    ))}
  </motion.ul>
);

const links = {
  Home: '/',
  About: '#about',
  Projects: '#projects',
  Blogs: '#blogs',
};
