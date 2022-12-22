import { useState } from "react";
import PropTypes from "prop-types";
import CardGrid from "../../organisms/CardGrid/CardGrid";
import Hero from "../../organisms/Hero";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Pagination from "../../molecules/Pagination/Pagination";
import { SearchContext } from "../../../contexts";

const Home = (props) => {
  // filter data based on search
  const [searchValue, setSearchValue] = useState("");
  const value = { searchValue, setSearchValue };

  let filteredCards = props.data;
  if (props.data !== "") {
    filteredCards = props.data.filter((card) => {
      return (
        card.data.title
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        card.data.artist
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        card.data.genre
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    });
  }

  // pagination
  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // displaying only a portion of the data per page
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return props.data === "" ? (
    <div>Loading ...</div>
  ) : (
    <div data-testid={props.testID} className={"Home"}>
      <Hero data={props.data[0]} />
      <SearchContext.Provider value={value}>
        <SearchBar additionalClasses={["margin-l"]} />
        <CardGrid data={currentCards} cardsPerPage={cardsPerPage} />
        <Pagination
          cardsPerPage={cardsPerPage}
          numberOfCards={filteredCards.length}
          setPage={setPage}
          currentPage={currentPage}
        />
      </SearchContext.Provider>
    </div>
  );
};

Home.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.array,
  cardsPerPage: PropTypes.number,
};

export default Home;
