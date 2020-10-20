import * as React from "react";
import { useList } from "effector-react";

import { Wrapper } from "features/history-line/ui";
import { Request } from "ui/molecules/request";

import {
    $historyLine,
    removeRequest,
    openRequestMenu,
    copyRequest
} from "features/history-line/model";

export const HistoryLine = () => {
    const list = useList($historyLine, (request) => (
        <Request
            {...request}
            removeRequest={removeRequest}
            openRequestMenu={openRequestMenu}
            copyRequest={copyRequest}
        />
    ));

    return <Wrapper>{list}</Wrapper>;
};
