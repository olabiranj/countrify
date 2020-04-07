import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "../components/Header/Header";

export default function About(props) {
    return (
        <React.Fragment>
            <Header
                brightness={props.brightness}
                setBrightness={props.setBrightness}
                setCountries={props.setCountries}
                setLoading={props.setLoading}
            />
            <CssBaseline />
            <Container maxWidth="lg" style={{ height: "100vh" }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    Countrify
                </Typography>
                <Typography variant="h4" gutterBottom>
                    ...all over the world.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to COUNTRIFY, an online platform which provides
                    basic information about all countries in the world.
                    Countrify allows you to find countries by their names or
                    continents. Information provided by countrify includes
                    country name, estimated population, region, etc.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    -Olabiran Joshua Olaiya
                </Typography>
                <hr />
                <Typography variant="body1" gutterBottom>
                    Contents provided by{" "}
                    <span style={{ color: "blue" }}>
                        https://restcountries.eu
                    </span>
                </Typography>
                <br />
            </Container>
        </React.Fragment>
    );
}
