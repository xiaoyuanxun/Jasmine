import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { AnvilProvider } from "@vvv-interactive/nftanvil-react";
import { Provider } from "react-redux";
import store from "./state/store";

import authentication from "@vvv-interactive/nftanvil-react/cjs/auth.js";

authentication.setOptions({ cookie: true });

const container = document.getElementById("app");
const root = createRoot(container);

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config })

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AnvilProvider>
      <Provider store={store} >
        <App />
      </Provider>
    </AnvilProvider>
  </ChakraProvider>
);
