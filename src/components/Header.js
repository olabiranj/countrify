import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    p5: {
        padding: 5
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        padding: 5,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function Header(props) {
    let history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const changeBrightness = () => {
        props.setBrightness(!props.brightness)
    }
    
    return (
        <React.Fragment>       
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })} position="static" color={props.brightness ? 'secondary' : 'inherit'}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                        <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
                        Countrify
                    </Typography>
                        <Link onClick={() => history.push("/about")} component="button" underline='none' color='inherit'>
                        About
                    </Link>
                                            
                        {!props.brightness ? <IconButton color="inherit" onClick={changeBrightness}>
                        <Brightness4Icon />
                        </IconButton> : <IconButton color="inherit" onClick={changeBrightness}>
                            <Brightness5Icon/>
                        </IconButton>}
                        <IconButton color="inherit" onClick={() => history.push('/github')}>
                        <GitHubIcon />
                    </IconButton>
                    
                    
                </Toolbar>
                
            </AppBar>
            
        </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                
                classes={{
                    paper: classes.drawerPaper,
                }}
                
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Typography variant="h6"> Search by Continents</Typography>
                <Divider />
                <List>
                    <ListItem button onClick={() => {
                        props.setLoading(true);
                        setOpen(false);
                        axios.get(`https://restcountries.eu/rest/v2/all`)
                                .then(payload => {
                                    props.setCountries(payload.data)
                                    props.setLoading(false);
                                })
                                .catch(err => console.log(err))
                    }}>
                        <ListItemText primary="All" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        props.setLoading(true);
                        setOpen(false);
                            axios.get(`https://restcountries.eu/rest/v2/region/africa`)
                                .then(payload => {
                                    props.setCountries(payload.data)
                                    props.setLoading(false);
                                })
                                .catch(err => console.log(err))
                    }}>
                        <ListItemText primary="Africa" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        props.setLoading(true);
                        setOpen(false);
                        axios.get(`https://restcountries.eu/rest/v2/region/america`)
                            .then(payload => {
                                props.setCountries(payload.data)
                                props.setLoading(false);
                            })
                            .catch(err => console.log(err))
                    }}>
                        <ListItemText primary="America" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        props.setLoading(true);
                        setOpen(false);
                        axios.get(`https://restcountries.eu/rest/v2/region/asia`)
                            .then(payload => {
                                props.setCountries(payload.data)
                                props.setLoading(false);
                            })
                            .catch(err => console.log(err))
                    }}>
                        <ListItemText primary="Asia" />
                    </ListItem>
                    <ListItem button >
                        <ListItemText primary="Europe" onClick={() => {
                            props.setLoading(true);
                            setOpen(false);
                            axios.get(`https://restcountries.eu/rest/v2/region/europe`)
                                .then(payload => {
                                    props.setCountries(payload.data)
                                    props.setLoading(false);
                                })
                                .catch(err => console.log(err))
                        }}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemText primary="Oceania" onClick={() => {
                            props.setLoading(true);
                            setOpen(false);
                            axios.get(`https://restcountries.eu/rest/v2/region/oceania`)
                                .then(payload => {
                                    props.setCountries(payload.data)
                                    props.setLoading(false);
                                })
                                .catch(err => console.log(err))
                        }}/>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </React.Fragment> 
    );
}
