import * as React from "react";
import { Router } from "react-router-dom";

import { Pages } from "pages/index";
import { GlobalStyles } from "ui/global";
import { history } from "lib/routing";

const App = () => (
    <>
        <GlobalStyles />
        <Router history={history}>
            <Pages />
        </Router>
    </>
);

export default App;
