import React from 'react';

import Header from '../components/Header/Header';
import Country from '../components/Country/Country';


export default function OneCountry(props) {


    return (
        <React.Fragment >
            <Header brightness={props.brightness}
                setBrightness={props.setBrightness}
                setCountries={props.setCountries}
                setLoading={props.setLoading}
            />
            <Country brightness={props.brightness}
                countries={props.countries}
                loading={props.loading}
                setLoading={props.setLoading} />
        </React.Fragment>
    )
}