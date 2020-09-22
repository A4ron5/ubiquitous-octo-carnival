import React from "react";
import styled from "styled-components";

import { Input, Label } from "ui/atoms";

const FieldStyled = styled.div``;

type TField = {
    name: string;
    label: string;
    type: string;
};

export const Field = (props: TField) => {
    const { name, label, type } = props;

    return (
        <FieldStyled>
            <Label htmlFor={name}>{label}</Label>
            <Input id={name} name={name} type={type} />
        </FieldStyled>
    );
};
