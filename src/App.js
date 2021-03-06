import React, { useState, useEffect } from "react";
import axios from "axios";
import Index from "./views/Index";
import About from "./views/About";
import OneCountry from "./views/OneCountry";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [brightness, setBrightness] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeMode = () => {
    if (brightness === false) {
      window.localStorage.setItem("theme", "dark");
      setBrightness(true);
    } else {
      window.localStorage.setItem("theme", "light");
      setBrightness(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    const fecthData = async () => {
      const payload = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(payload.data);
      setLoading(false);
    };
    if (window.localStorage.getItem("theme") === "light") {
      setBrightness(false);
    } else {
      setBrightness(true);
    }
    fecthData();
  }, []);
  return (
    <React.Fragment>
      <div
        style={
          !brightness
            ? { backgroundColor: "#f8f8f8", color: "black" }
            : { backgroundColor: "#1a000d", color: "white" }
        }
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Index
                brightness={brightness}
                setBrightness={changeMode}
                countries={countries}
                loading={loading}
                setLoading={setLoading}
                setCountries={setCountries}
              />
            </Route>
            <Route path="/about">
              <About
                brightness={brightness}
                setBrightness={changeMode}
                setLoading={setLoading}
              />
            </Route>
            <Route path="/country/:name">
              <OneCountry
                brightness={brightness}
                setBrightness={changeMode}
                countries={countries}
                loading={loading}
                setLoading={setLoading}
                setCountries={setCountries}
              />
            </Route>
            <Route
              path="/github"
              component={() => {
                window.location.href = "https://github.com/olabiranj/countrify";
                return null;
              }}
            />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
