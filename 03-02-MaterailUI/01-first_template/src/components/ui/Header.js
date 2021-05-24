import React, {useEffect, useState} from "react";
import {AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, useScrollTrigger} from "@material-ui/core";
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
        height: "45px",
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px"
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
    menu: {
        backgroundColor: theme.palette.common.nicBlue,
        borderRadius: 0,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
        minWidth: 10,
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
    //* Styling import
    const classes = useStyles();

    //* Navigation
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value)
    }

    //* Menu anchor
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //* Menu items
    const [selectedIndex, setSelectedIndex] = useState(0);
    const menuOptions = [
        {name: "Services", link: "/services"},
        {name: "Custom Software", link: "/customsoftware"},
        {name: "Mobile App", link: "/mobileapp"},
        {name: "Website", link: "/website"},
    ];
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setSelectedIndex(i);
    }

    //* Active page on reload
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

    switch (window.location.pathname) {
        case "/":
            if (value !== 0) {
                setValue(0);
            }
            break;
        case "/services":
            if (value !== 1) {
                setValue(1);
                setSelectedIndex(0);
            }
            break;
        case "/customsoftware":
            if (value !== 1) {
                setValue(1);
                setSelectedIndex(1);
            }
            break;
        case "/mobileapps":
            if (value !== 1) {
                setValue(1);
                selectedIndex(2);
            }
            break;
        case "/website":
            if (value !== 1) {
                setValue(1);
                selectedIndex(3);
            }
            break;
        case "/revolution":
            if (value !== 2) {
                setValue(2);
            }
            break;
        case "/about":
            if (value !== 3) {
                setValue(3);
            }
            break;
        case "/contact":
            if (value !== 4) {
                setValue(4);
            }
            break;
        case "/estimate":
            if (value !== 5) {
                setValue(5);
            }
            break;
        default:
            break;
    }


    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>

                        { //* LOGO
                        }
                        <Button
                            className={classes.logoContainer}
                            component={Link} to="/"
                            disableRipple
                            onClick={() => setValue(0)}
                        >
                            <img
                                alt="logo"
                                src={logo}
                                className={classes.logo}
                            />
                        </Button>

                        { //* NAVIGATION
                        }
                        <Tabs value={value}
                              className={classes.tabContainer}
                              indicatorColor="primary"
                              onChange={handleChange}
                        >
                            <Tab
                                className={classes.tab}
                                component={Link} to="/"
                                label="Home"
                            />
                            <Tab
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                className={classes.tab}
                                component={Link} to="/services"
                                label="Services"
                                onMouseOver={handleClick}
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

                        { //* ESTIMATE
                        }
                        <Button
                            className={classes.button}
                            color="secondary"
                            component={Link} to="/estimate"
                            variant="contained"
                        >
                            Free Estimate
                        </Button>

                        { //* MENUS
                        }
                        <Menu
                            anchorEl={anchorEl}
                            classes={{paper: classes.menu}}
                            elevation={0}
                            id="simple-menu"
                            keepMounted
                            MenuListProps={{onMouseLeave: handleClose}}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {menuOptions.map((option, i) => (
                                <MenuItem
                                    classes={{root: classes.menuItem}}
                                    component={Link} to={option.link}
                                    key={i}
                                    onClick={(event) => {
                                        handleMenuItemClick(event, i);
                                        setValue(1);
                                        handleClose();
                                    }}
                                    selected={i === selectedIndex && value === 1}
                                >
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;
