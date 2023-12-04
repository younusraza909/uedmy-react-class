import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const AppComponent = styled.div`
  background-color: var(--color-brand-50);
`;

function App() {
  // GlobalStyles cannot takes props or children so we need to put it as siblings to app
  return (
    <>
      <GlobalStyles />
      <AppComponent>
        <Heading as="h2">Hello World</Heading>
      </AppComponent>
    </>
  );
}

export default App;
