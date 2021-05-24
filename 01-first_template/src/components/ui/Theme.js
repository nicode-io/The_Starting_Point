import {createMuiTheme} from '@material-ui/core/styles';

const nicBlue = "#0B72B9";
const nicOrange = "#FFBA60";

const MyTheme = createMuiTheme({
    palette: {
        common: {
            nicBlue: nicBlue,
            nicOrange: nicOrange,
        },
        primary: {
            main: nicBlue
        },
        secondary: {
            main: nicOrange
        }
    },
    typography: {
        estimate: {
            color: "white",
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none"
        },
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        }
    }
});

export default MyTheme;
