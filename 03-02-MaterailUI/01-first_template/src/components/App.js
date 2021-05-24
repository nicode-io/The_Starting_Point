import '@fontsource/roboto';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import Header from "./ui/Header";
import MyTheme from "./ui/Theme";
import {Route, Switch} from "react-router";


const App = () => {
    return (
        <ThemeProvider theme={MyTheme}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route
                        exact path="/"
                        component={() => <div>Home</div>}
                    />
                    <Route
                        exact path="/services"
                        component={() => <div>Services</div>}
                    />
                    <Route
                        exact path="/customsoftware"
                        component={() => <div>Custom Software</div>}
                    />
                    <Route
                        exact path="/mobileapp"
                        component={() => <div>Mobile App</div>}
                    />
                    <Route
                        exact path="/website"
                        component={() => <div>Website</div>}
                    />
                    <Route
                        exact path="/revolution"
                        component={() => <div>Revolution</div>}
                    />
                    <Route
                        exact path="/about"
                        component={() => <div>About Us</div>}
                    />
                    <Route
                        exact path="/contact"
                        component={() => <div>Contact Us</div>}
                    />
                    <Route
                        exact path="/estimate"
                        component={() => <div>Estimate</div>}
                    />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
