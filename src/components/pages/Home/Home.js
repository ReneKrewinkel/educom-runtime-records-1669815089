import { useState } from "react";
import PropTypes from "prop-types";
import CardGrid from "../../organisms/CardGrid/CardGrid";
import Hero from "../../organisms/Hero";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Pagination from "../../molecules/Pagination/Pagination";

/// TODO: Define props
const Home = (props) => {
  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 8;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = props.data.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div data-testid={props.testID} className={"Home"}>
      <Hero />
      <SearchBar
        additionalClasses={["flex", "align-items-center", "margin-block-l"]}
      />
      <CardGrid data={currentCards} cardsPerPage={cardsPerPage} />
      <Pagination
        cardsPerPage={cardsPerPage}
        numberOfCards={props.data.length}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  );
};

Home.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.array,
  cardsPerPage: PropTypes.number,
};

export default Home;
