import GlobalStyles from "./styles/GlobalStyles";

function App() {
  // GlobalStyles cannot takes props or children so we need to put it as siblings to app
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <div>Hello Wold</div>
    </>
  );
}

export default App;
