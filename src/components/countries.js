import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
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
    pFixed:{
        position: 'fixed',
        bottom: '40%',
        left: '47%',
    }
}));

export default function CountryCard(props) {
    const classes = useStyles();
    let history = useHistory();
    const toCommas = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div>
            {props.loading ? 
            <Grid container>
                    <Grid item xs={1} style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '100px', height: '85vh' }}>
                        <CircularProgress color={props.brightness ? 'secondary' : 'primary'} className={classes.pFixed} disableShrink /> 
                </Grid>
            </Grid> :
                <Grid container >
                    {props.countries.map((country => {
                        return (<Grid item xs={12} sm={6} lg={3} key={country.name}>
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
                                    <h3>Population: {toCommas(country.population)}</h3>
                                    <h4>Region: {country.region}</h4>
                                    <h4>Capital: {country.capital}</h4>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Button variant="outlined" onClick={() => history.push(`/country/${country.name}`)} color={props.brightness ? 'secondary' : 'inherit'}>
                                        Read More...
                            </Button>

                                </CardActions>

                            </Card>
                        </Grid>)
                    }))}
                </Grid>}
        
        </div>
    );
}
