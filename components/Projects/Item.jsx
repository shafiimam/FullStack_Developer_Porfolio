import React from 'react';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum';
import { items } from './data';
import { Button, Box, Image, Text, Link, Tooltip } from '@chakra-ui/react';
import { RxExternalLink } from 'react-icons/rx';
export function Item({ id, setProjectId }) {
  const { category, title, image, description, techStack, preview } =
    items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{
          zIndex: 0,
          position: 'fixed',
          willChange: 'opacity',
          top: '0',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          maxWidth: '100vw',
        }}
        className='overlay'
        onClick={() => setProjectId(null)}
      ></motion.div>
      <Box
        className='card-content-container open'
        zIndex='10'
        height={['800px', '600px', '900px']}
        width={['400px', '500px', '700px']}
        m='0 auto'
      >
        <Box
          as={motion.div}
          className='card-content'
          layoutId={`card-container-${id}`}
          sx={{
            height: ['100%', '100%', '100%'],
          }}
        >
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <Image
              className='card-image'
              src={image}
              alt=''
              height='auto'
              width='100%'
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
          <Box
            as={motion.div}
            className='content-container'
            sx={{
              padding: '69% 35px 35px 35px',
              maxWidth: '700px',
              width: '90vw',
              height: ['600px', '800px', 'auto'],
            }}
            animate
          >
            {description}
            <Box mt='5'>
              <strong>Tech Stack:</strong>
              {Object?.keys(techStack).map((key) => {
                return (
                  <Text key={key} as='p'>
                    {key}:{techStack[key].join(',')}
                  </Text>
                );
              })}
            </Box>
            <Tooltip label='Open Preview' direction='rtl'>
              <Button
                as={motion.button}
                sx={{
                  bottom: '-50px',
                  left: '97%',
                }}
                m={'0'}
                p='0'
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.15 } }}
              >
                <Link href={preview} isExternal={true} p='11px'>
                  <RxExternalLink />
                </Link>
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
}
