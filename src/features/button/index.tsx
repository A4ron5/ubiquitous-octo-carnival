import * as React from "react";
import { Button as ButtonUI, Loader } from "ui/atoms";

type Params = {
    pending: boolean;
    children: React.ReactNode;
    secondary?: boolean;
    clickHandler?: any;
};

export const Button = ({
    pending,
    children,
    clickHandler,
    secondary
}: Params) => {
    if (pending) {
        return (
            <ButtonUI>
                <Loader />
            </ButtonUI>
        );
    }
    return (
        <ButtonUI secondary={secondary} onClick={clickHandler}>
            {children}
        </ButtonUI>
    );
};
