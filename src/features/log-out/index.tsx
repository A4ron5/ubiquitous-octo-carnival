import * as React from "react";

import { handlerLogout } from "features/log-out/model";
import { Exit } from "features/log-out/ui";

export const Logout = () => {
    return <Exit onClick={handlerLogout}>Выйти</Exit>;
};
