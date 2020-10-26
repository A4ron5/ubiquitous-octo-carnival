import * as React from "react";
import { useStore } from "effector-react";

import { clickSendButton, sendRequestFx } from "features/text-area/model";
import { Button } from "features/button";

export const SendButton = () => {
    const requestPending = useStore(sendRequestFx.pending);

    return (
        <Button pending={requestPending} clickHandler={clickSendButton}>
            Отправить
        </Button>
    );
};
