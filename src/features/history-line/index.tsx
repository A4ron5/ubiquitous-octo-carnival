import * as React from "react";
import { useList } from "effector-react";

import { Wrapper } from "features/history-line/ui";

import { History } from "features/history-line/history";

import { $historyLine } from "features/history-line/model";

export const HistoryLine = () => {
    const list = useList($historyLine, (request) => <History {...request} />);

    return <Wrapper>{list}</Wrapper>;
};
