import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import Navigation from "./components/organisms/Navigation/Navigation";
import Home from "./components/pages/Home/Home";
import Footer from "./components/organisms/Footer/Footer";

const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <div className="App">
      <Navigation />
      <Home data={isLoaded ? data : ""} cardsPerPage={8} />
      <Footer additionalClasses={["bg-highlight-dark-50"]} />
    </div>
  );
};
export default App;
