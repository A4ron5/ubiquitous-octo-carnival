import * as React from "react";
import { Redirect } from "react-router-dom";

import { Pages } from "pages/index";
import { GlobalStyles } from "ui/global";

const Application = () => (
    <>
        <Redirect to="/login" />
        <GlobalStyles />
        <Pages />
    </>
);

export default Application;
