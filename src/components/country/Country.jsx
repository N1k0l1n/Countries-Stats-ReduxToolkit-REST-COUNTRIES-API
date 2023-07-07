import "./country.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../app/features/countries/countriesAction";

const Country = () => {
  const { countriesData, loading, error, success } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState([]);

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
    </section>
  );
};

export default Country;
