import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import SearchBar from "../components/Search/Search";
import CountryCard from "../components/countries/Countries";

export default function Index(props) {
  return (
    <React.Fragment>
      <Header
        brightness={props.brightness}
        setBrightness={props.setBrightness}
        setCountries={props.setCountries}
        setLoading={props.setLoading}
      />
      <SearchBar
        brightness={props.brightness}
        loading={props.loading}
        setLoading={props.setLoading}
        setCountries={props.setCountries}
      />
      <CountryCard
        brightness={props.brightness}
        countries={props.countries}
        loading={props.loading}
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
