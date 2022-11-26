
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'brand.dark.500',
  useSystemColorMode: false,
}
const colors = {
  brand: {
    dark: {
      500: '#000E14',
      400: '#00111A',
      300: '#00141F',
      200: '#001824',
      100: '#001B29',
    },
    gray: {
      500: '#595959',
      400: '#7F7F7F',
      300: '#A5A5A5',
      200: '#CCCCCC',
      100: '#F2F2F2',
    },
    light: {
      500: '#F1F1F1',
      400: '#F8F9FA',
      300: '#E9ECEF',
      200: '#DEE2E6',
      100: '#CED4DA',
    },
    blue: {
      500: '#002233',
      400: '#00293D',
      300: '#003047',
      200: '#003652',
      100: '#003D5C',
    }
  },
}
const styles = {
  global: (props) => ({
    'html, body': {
      fontSize: 'md',
      fontFamily: 'Share Tech Mono, monospace',
      color: props.colorMode === 'dark' ? props.theme.colors.brand.light['300'] : props.theme.colors.brand.dark['500'],
      backgroundColor: props.colorMode === 'dark' ? props.theme.colors.brand.dark['200'] : props.theme.colors.brand.light['200'],
      lineHeight: 'tall',
    },
    a: {
      color: props.colorMode === 'dark' ? props.theme.colors.brand.light['500'] : props.theme.colors.brand.gray['500'],
    },

  }),

}

const theme = extendTheme({ config, colors, styles })
export default theme