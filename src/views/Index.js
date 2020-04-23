import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import SearchBar from "../components/Search/Search";
import CountryCard from "../components/countries/Countries";

export default function Index({
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
      <SearchBar
        brightness={brightness}
        loading={loading}
        setLoading={setLoading}
        setCountries={setCountries}
      />
      <CountryCard
        brightness={brightness}
        countries={countries}
        loading={loading}
      />
    </React.Fragment>
  );
}

Index.propTypes = {
  brightness: PropTypes.bool,
  loading: PropTypes.bool,
  countries: PropTypes.array,
  setBrightness: PropTypes.func,
  setLoading: PropTypes.func,
  setCountries: PropTypes.func,
};
