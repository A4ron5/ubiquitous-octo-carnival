import * as React from "react";
import { Button as ButtonUI, Loader } from "ui/atoms";

type Params = {
    pending: boolean;
    children: React.ReactNode;
    clickHandler?: any;
};

export const Button = ({ pending, children, clickHandler }: Params) => {
    if (pending) {
        return (
            <ButtonUI>
                <Loader />
            </ButtonUI>
        );
    }
    return <ButtonUI onClick={clickHandler}>{children}</ButtonUI>;
};
