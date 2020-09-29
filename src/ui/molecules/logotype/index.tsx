import * as React from "react";
import styled from "styled-components";

const Circle = styled.div`
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
`;

const Rectangle = styled.div`
    width: 0.9375rem;
    height: 1.875rem;
`;

const Parallelogram = styled.div`
    width: 0.9375rem;
    height: 1.875rem;
    transform: skew(-20deg);
`;

export const Shape = styled.div`
    display: flex;
    justify-content: space-between;
    width: 6.5rem;

    div {
        background: var(--color-logotype);
    }
`;

export const Logotype = () => (
    <Shape>
        <Circle />
        <Rectangle />
        <Circle />
        <Parallelogram />
    </Shape>
);
