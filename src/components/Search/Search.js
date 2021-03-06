import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({ setLoading, setCountries, brightness }) {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [msg, setMsg] = useState("");

  const findCountry = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCountry(e.target.value);
    try {
      let payload = await axios.get(
        `https://restcountries.eu/rest/v2/name/${country}`
      );
      setCountries(payload.data);
      setLoading(false);
      setMsg("");
    } catch (error) {
      const payload = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(payload.data);
      setLoading(false);
      setMsg("Country not found!");
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={4} lg={6}>
          <Container className={classes.root}>
            <Paper
              component="form"
              style={
                brightness
                  ? {
                      backgroundColor: "#b30059",
                    }
                  : { backgroundColor: "" }
              }
            >
              <InputBase
                className={classes.input}
                placeholder="Search country"
                name={country}
                onChange={findCountry}
              />
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <br />
          </Container>
        </Grid>
        <Grid item xs={12} sm={4} lg={6}>
          <Container className={classes.root}>
            <Typography variant="h6" gutterBottom>
              {msg}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

SearchBar.propTypes = {
  brightness: PropTypes.bool,
  setLoading: PropTypes.func,
  setCountries: PropTypes.func,
};
