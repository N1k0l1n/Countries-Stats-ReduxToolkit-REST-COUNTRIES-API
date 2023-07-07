import "./country.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../app/features/countries/countriesAction";

const Country = () => {
  const { countriesData, loading, error } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countriesData.length > 0) {
      setCountryData(countriesData);
      console.log(countriesData);
    }
  }, [countriesData]);

  console.log(countriesData);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.map((item, index) => (
          <div className="country-card" key={index}>
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
          </div>
        ))
      )}
      {/* Additional code for the empty country card */}
      <div className="country-card">
        <img src="#" alt="" className="country-image" />
        <div className="country-content">
          <h3></h3>
          <p>
            Population: <span></span>
          </p>
          <p>
            Region: <span></span>
          </p>
          <p>
            Capital: <span></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Country;
