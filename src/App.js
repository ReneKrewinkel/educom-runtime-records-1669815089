import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import Navigation from "./components/organisms/Navigation/Navigation";
import Detail from "./components/pages/Detail/Detail";
import Footer from "./components/organisms/Footer/Footer";

const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <div className="App">
      <Navigation />
      <Detail data={isLoaded ? data : ""} />
      <Footer additionalClasses={["bg-highlight-dark-50"]} />
    </div>
  );
};
export default App;
