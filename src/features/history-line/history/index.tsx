import * as React from "react";

import { Request } from "ui/molecules/request";
import { copyRequest, removeRequest } from "features/history-line/model";
import { RequestType } from "features/history-line/model";

export const History = (props: RequestType) => {
    return (
        <Request
            {...props}
            open={false}
            removeRequest={removeRequest}
            copyRequest={copyRequest}
        />
    );
};
