import React from "react";
import "./country-detail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../../app/features/countries/countriesAction";
import { reset } from "../../app/features/countries/countriesSlice";

const CountryDetails = () => {
  const { loading, error, countrySearched } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, code, error]);

  return (
    <section className="country-detail-container">
      <Link className="back-button" to="/">
        <i className="fa-solid fa-arrow-left"></i> Back
      </Link>

      <div className="country-detail-content">
        {countrySearched.length > 0 ? (
          <>
            <img
              src={countrySearched[0].flags.png}
              alt={countrySearched[0].flags.alt}
              className="country-detail-image"
            />

            <div className="country-detail-right">
              <h1>{countrySearched[0].name.official}</h1>
              <div className="details">
                <div className="detail-left">
                  <p>
                    Offcial Name: <span>{countrySearched[0].name.official}</span>
                  </p>
                  <p>
                    Population: <span>{countrySearched[0].population}</span>
                  </p>
                  <p>
                    Region: <span>{countrySearched[0].region}</span>
                  </p>

                  <p>
                    Sub Region: <span>{countrySearched[0].subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{countrySearched[0].capital}</span>
                  </p>
                </div>

                <div className="detail-right">
                  <p>
                    Top Level Domain: <span>{countrySearched[0].tld[0]}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>
                      
                    </span>
                  </p>

                  <p>
                    Languages:
                    <span></span>
                  </p>
                </div>
              </div>

              <div className="border">
                <p>Border Countries:</p>
              </div>
            </div>
          </>
        ) : (
          <div>No details found</div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;
