import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Country from "../components/Country/Country";

export default function OneCountry({
  brightness,
  setBrightness,
  setCountries,
  setLoading,
  loading,
  countries,
}) {
  return (
    <React.Fragment>
      <Header
        brightness={brightness}
        setBrightness={setBrightness}
        setCountries={setCountries}
        setLoading={setLoading}
      />
      <Country
        brightness={brightness}
        countries={countries}
        loading={loading}
        setLoading={setLoading}
      />
    </React.Fragment>
  );
}

OneCountry.propTypes = {
  brightness: PropTypes.bool,
  loading: PropTypes.bool,
  countries: PropTypes.array,
  setBrightness: PropTypes.func,
  setLoading: PropTypes.func,
  setCountries: PropTypes.func,
};
