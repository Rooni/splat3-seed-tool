import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

}

const theme = extendTheme({
  ...config,
  styles: {
    global: {
      'html': {
          overflow: "-moz-scrollbars-vertical",
          overflowY: "scroll",
      },
      "::-webkit-scrollbar": {
        width: "0.7rem",
        height: "0.7rem",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "purple.500",
        borderRadius: "1.4rem",
      },
      "::-webkit-scrollbar-thumb:hover": {
        bg: "purple.700",
      },
    },
  },
})

export default theme