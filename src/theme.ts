import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

}

const theme = extendTheme({
  ...config,
  "colors": {
    "gray": {
      "50": "#EDF3F7",
      "100": "#CEDDE9",
      "200": "#AEC8DB",
      "300": "#8EB2CD",
      "400": "#6E9DBF",
      "500": "#4E87B1",
      "600": "#3F6C8D",
      "700": "#2F516A",
      "800": "#1F3647",
      "900": "#101B23"
    }
  },
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