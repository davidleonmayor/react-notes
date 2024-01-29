import React from "react";
import ReactDOM from "react-dom/client";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };
// const theme = extendTheme({
//   components: {
//     Button,
//   },
// });

// const theme = extendTheme({ colors });

import { ColorModeScript } from "@chakra-ui/react";
// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}>  */}
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
