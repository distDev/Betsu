import Layout from "./Components/layout";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <h2>Трелло</h2>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
