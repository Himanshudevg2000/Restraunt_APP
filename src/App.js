import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/RestrauntSummary/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
