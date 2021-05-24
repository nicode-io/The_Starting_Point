import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/style.css';
import App from './app/layout/App';
import {store, StoreContext} from './app/stores/store';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    // <React.StrictMode> TODO:Check TS compatibility before activate strict mode
    <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreContext.Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
)
;
