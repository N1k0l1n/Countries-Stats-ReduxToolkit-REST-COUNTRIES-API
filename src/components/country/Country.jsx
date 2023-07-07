import "./country.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../app/features/countries/countriesAction";
// Components
import Spinner from "../../assets/spinner/Spinner";

const Country = () => {
  const { countriesData, loading, error, success } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(() => {
    dispatch(showAllCountries()).then(() => {
      if (success) {
        setCountryData(countriesData);
        console.log(countriesData);
      }
      if (error) {
        console.log(error);
      }
    });
  }, [dispatch, success, error]);

  // Get current countries for pagination
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countryData.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="country-container">
      {loading ? (
        <Spinner />
      ) : (
        currentCountries.map((item, index) => (
          <Link className="country-card" key={index}>
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="country-image"
            />
            <div className="country-content">
              <h3>{item.name.common}</h3>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span>{item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
            </div>
          </Link>
        ))
      )}

      {/* Pagination */}
      <div className="pagination-container">
        <button
          className={`pagination-item previous ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="page-indicator">
          Page {currentPage} of {Math.ceil(countryData.length / countriesPerPage)}
        </div>
        <button
          className={`pagination-item next ${currentPage === Math.ceil(countryData.length / countriesPerPage) ? "disabled" : ""}`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(countryData.length / countriesPerPage)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Country;
