import styled, { css } from "styled-components";

const reset = css`
    padding: 0;
    outline: none;
    border: none;
`;

export const Button = styled.button`
    ${reset};

    position: relative;
    width: 6.875rem;
    height: 2.5rem;
    background: linear-gradient(
        180deg,
        var(--color-button-gradient-1-primary) 0%,
        var(--color-button-gradinet-2-primary) 100%
    );
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    ${({ secondary }: { secondary?: boolean }) =>
        secondary &&
        css`
            background: none;
            color: #000;
            width: auto;
        `}
`;
