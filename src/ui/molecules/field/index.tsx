import * as React from "react";
import styled from "styled-components";

import { Input, Label } from "ui/atoms";

type TField = {
    name: string;
    label: string;
    type: string;
    handler: any;
    optional?: boolean;
};

const FieldStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${Label} {
        margin-bottom: 0.3125rem;
    }
`;

const Optional = styled.span`
    position: absolute;
    right: 0;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: var(--color-font-secondary);
`;

export const Field = (props: TField) => {
    const { name, label, type, handler, optional } = props;

    return (
        <FieldStyled>
            <Label htmlFor={name}>{label}</Label>
            {optional && <Optional>Опционально</Optional>}
            <Input id={name} name={name} type={type} onChange={handler} />
        </FieldStyled>
    );
};
