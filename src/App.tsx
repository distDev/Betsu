import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/layout";
import AppRoter from "./Components/app-router";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <AppRoter />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
