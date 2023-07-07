import "./country.css";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../app/features/countries/countriesAction";
import { reset } from "../../app/features/countries/countriesSlice";

const Country = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = React.useState([]);

  React.useEffect(() => {
    dispatch(showAllCountries);

    if (success) {
      setCountryData(countriesData);
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.length > 0 &&
        countryData.map((item, index) => {
          return (
            <div className="country-card" key={index}>
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
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
          );
        })
      )}
      <div
        // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
        className="country-card"
        key=""
      >
        <img src="#" alt="" className="country-image" />
        <div className="country-content">
          <h3> </h3>
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
