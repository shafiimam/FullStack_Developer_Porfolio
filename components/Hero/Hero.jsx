import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { Text, useColorMode } from '@chakra-ui/react';
export default function Hero({ children, baseVelocity = -10 }) {
  const baseX = useMotionValue(1);
  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (moveBy >= 0) {
      moveBy = 0.05;
    }
    if (moveBy <= -0) {
      moveBy = -0.05;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  const { colormode } = useColorMode();
  return (
    <div className='parallax'>
      <motion.div
        className='scroller'
        style={{
          x,
          position: 'fixed',
          zIndex: 10,
          padding: '20px 50px',
          display: 'flex',
          position: 'fixed',
          bottom: 0,
          justifyContent: 'flex-end',
          transition: 'all 0.5s ease',
          backdropFilter: 'blur(20px)',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
        <Text as='span' sx={spanStyles}>
          {children}
        </Text>
      </motion.div>
    </div>
  );
}
const spanStyles = {
  fontSize: ['1.2rem', '2rem', '2.5rem', '3rem', '3.5rem'],
};
