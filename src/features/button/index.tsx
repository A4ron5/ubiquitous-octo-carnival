import * as React from "react";
import { Button as ButtonUI, Loader } from "ui/atoms";

type Params = {
    pending: boolean;
    children: React.ReactNode;
};

export const Button = ({ pending, children }: Params) => {
    if (pending) {
        return (
            <ButtonUI>
                <Loader />
            </ButtonUI>
        );
    }
    return <ButtonUI>{children}</ButtonUI>;
};
