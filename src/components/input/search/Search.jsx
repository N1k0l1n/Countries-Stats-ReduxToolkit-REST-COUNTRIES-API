import "./search.css";
import { setSearchTerm } from "../../../app/features/countries/countriesSlice";

//Redux
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
