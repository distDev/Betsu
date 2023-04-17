import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/layout";
import AppRoter from "./Components/app-router";
import { theme } from "./Utils/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <AppRoter />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
