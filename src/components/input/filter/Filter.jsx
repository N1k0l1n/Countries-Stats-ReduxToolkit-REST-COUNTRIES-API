import "./filter.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

//Redux
import { useDispatch } from "react-redux";
import {
  reset,
  setRegion,
} from "../../../app/features/countries/countriesSlice";

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLocaleUpperCase()));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <FontAwesomeIcon
          className="fa-solid fa-angle-down"
          icon={faArrowDown}
        />
      </div>

      {displayDropdown ? (
        <div className="dropdown">
          {regions.map((item, i) => {
            return (
              <div
                className="dropdown-item"
                key={i}
                onClick={() => {
                  setFilter(item);
                  handleDropdown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
