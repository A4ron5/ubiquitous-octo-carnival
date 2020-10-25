import * as React from "react";

import { prettifyRequest } from "features/text-area/model";
import { Button } from "features/button";

export const FormatButton = () => {
    return (
        <Button clickHandler={prettifyRequest} pending={false} secondary>
            Форматировать
        </Button>
    );
};
