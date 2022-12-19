import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import { Routes, Route, Link } from "react-router-dom";

import Navigation from "./components/organisms/Navigation/Navigation";
import Detail from "./components/pages/Detail/Detail";
import ShoppingCart from "./components/organisms/ShoppingCart/ShoppingCart";
import Footer from "./components/organisms/Footer/Footer";
import Home from "./components/pages/Home/Home";

const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home data={isLoaded ? data : ""} />} />
        <Route
          path="/detail"
          element={<Detail data={isLoaded ? data : ""} />}
        />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer additionalClasses={["bg-highlight-dark-50"]} />
    </div>
  );
};
export default App;
