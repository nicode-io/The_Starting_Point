import React, {useEffect, useState} from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, useScrollTrigger} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";

function ElevationScroll(props) {
    const {children} = props;

    // Event Listener for user's scrolling
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        // Remove hover opacity
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
}))

const Header = (props) => {
    // Styling import
    const classes = useStyles();

    // Navigation configuration
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value)
    }

    // Active page on reload
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }
    }, [value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            component={Link} to="/"
                            onClick={() => setValue(0)}
                            className={classes.logoContainer}
                            disableRipple
                        >
                            <img alt="logo" src={logo} className={classes.logo}/>
                        </Button>
                        <Tabs value={value}
                              onChange={handleChange}
                              indicatorColor="primary"
                              className={classes.tabContainer}>
                            <Tab
                                className={classes.tab}
                                component={Link} to="/"
                                label="Home"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link} to="/services"
                                label="Services"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link} to="/revolution"
                                label="The Revolution"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link} to="/about"
                                label="About Us"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link} to="/contact"
                                label="Contact Us"
                            />
                        </Tabs>
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link} to="/estimate"
                            className={classes.button}
                        >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;
