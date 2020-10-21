import * as React from "react";

import { prettifyRequest } from "features/text-area/model";

export const FormatButton = () => {
    return <span onClick={prettifyRequest}>Форматировать</span>;
};
