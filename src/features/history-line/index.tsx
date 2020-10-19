import * as React from "react";

import { Wrapper } from "features/history-line/ui";
import { Request } from "ui/molecules/request";

export const HistoryLine = () => {
    return (
        <Wrapper>
            <Request status={true} name="track.get" />
        </Wrapper>
    );
};
