import * as React from "react";

import { clickSendButton } from "features/text-area/model";
import { Button } from "features/button";

export const SendButton = () => {
    return (
        <Button pending={false} clickHandler={clickSendButton}>
            Отправить
        </Button>
    );
};
