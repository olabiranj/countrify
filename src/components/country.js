import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    card: {
        margin: 10,
        marginTop: 30,
        backgroundColor: "inherit",
        color: 'inherit'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mAuto:{
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    my:{
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
    },
    pFixed: {
        position: 'fixed',
        bottom: '40%',
        left: '47%',
    }
}));

export default function Country(props) {
    const classes = useStyles();
    let history = useHistory();
    let [loading, setLoading] = useState(false)
    let { name } = useParams();
    let [country, setCountry] = useState([]);
    let [crs, setCrs] = useState();
    let [code, setCode] = useState();
    let [crsSymb, setCrsSymb] = useState();
    let [lang, setLang] = useState();
    let [call, setCall] = useState();
    let [domain, setDomain] = useState();
    let [time, setTime] = useState();
    let [borders, setBorders] = useState();
    useEffect(() => {
        setLoading(true);
        const fecthData = async () => {
            const payload = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
            setCountry(...payload.data);
            setCrs(payload.data[0].currencies[0].name);
            setCode(payload.data[0].currencies[0].code);
            setCrsSymb(payload.data[0].currencies[0].symbol);
            setLang(payload.data[0].languages[0].name);
            setCall(payload.data[0].callingCodes[0]);
            setDomain(payload.data[0].topLevelDomain[0]);
            setTime(payload.data[0].timezones[0]);
            setBorders(payload.data[0].borders[0]);
            console.log(payload.data[0].borders[0]);
            setLoading(false);
            console.log(borders)
        }
        fecthData()
    }, []);
    const popCommas = () => {
        let val = `${country.population}`;
        return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    const areaCommas = () => {
        let val = `${country.area}`;
        return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return (
        <div>
            {loading ?
                <Grid container>
                    <Grid item xs={1} style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '100px', height: '85vh' }}>
                        <CircularProgress color={props.brightness ? 'secondary' : 'primary'} className={classes.pFixed} disableShrink />
                    </Grid>
                </Grid> :
                <Grid container >
                <Grid item xs={12} sm={6} lg={6} className={classes.mAuto}>
                    <Button variant="outlined"
                        className={classes.my}
                     onClick={() => history.goBack()} color={props.brightness ? 'secondary' : 'inherit'}>
                        Go Back
                            </Button>
                            <Card className={classes.card} style={props.brightness ? { backgroundColor: '#33001a' } : { backgroundColor: 'inherit' }} >
                                <CardHeader
                                    title={country.name}
                                    color='inherit'
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={country.flag}
                                    title={country.name}
                                />
                                <CardContent>
                                    <h3>Population: {popCommas()}</h3>
                                    <h4>Region: {country.region}</h4>
                                    <h4>Sub Region: {country.subregion}</h4>
                                    <h4>Capital: {country.capital}</h4>
                                    <h4>Calling Code: {call}</h4>
                                    <h4>Area: {areaCommas()} KmSq</h4>
                                    <h4>Currency: {crs}({crsSymb})</h4>
                                    <h4>Domain: ({domain})</h4>
                                    <h4>Time: {time}</h4>
                                    <h4>Currency Code: {code}</h4>
                                    <h4>General language: {lang}</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                    
                </Grid>
                }
        
        </div>
    );
}
