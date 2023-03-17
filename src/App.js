import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/RestrauntSummary/Meals";
import Cart from "./Components/Cart/Cart";

function App() {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      { showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;