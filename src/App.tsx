import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

import { Pages } from "pages/index";
import { GlobalStyles } from "ui/global";
import { history } from "lib/routing";

const App = () => (
    <>
        <GlobalStyles />
        <BrowserRouter history={history}>
            <Redirect to="/login" />
            <Pages />
        </BrowserRouter>
    </>
);

export default App;
