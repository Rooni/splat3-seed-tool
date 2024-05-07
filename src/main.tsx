import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme.ts";
import {Router} from "./Router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
