import React from "react";
import "./country-detail.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../../app/features/countries/countriesAction";
import { reset } from "../../app/features/countries/countriesSlice";

const CountryDetails = () => {
  const { error, countrySearched } = useSelector(
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
    return () => {
      dispatch(reset());
    };
  }, [dispatch, code, error]);

  return (
    <section className="country-detail-container">
      <Link className="back-button" to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
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
                    Offcial Name:{" "}
                    <span>{countrySearched[0].name.official}</span>
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
                      {Object.values(countrySearched[0].currencies)
                        .map((item) => {
                          return item.name;
                        })
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    Languages:
                    <span>
                      {Object.values(countrySearched[0].languages)
                        .map((item) => {
                          return item;
                        })
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border">
                <p>Border Countries:</p>
                {countrySearched[0].borders ? (
                  countrySearched[0].borders.map((item, index) => {
                    return (
                      <Link className="border-name" to={`/${item}`} key={index}>
                        <p>{item}</p>
                      </Link>
                    );
                  })
                ) : (
                  <span>No Borders</span>
                )}
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
