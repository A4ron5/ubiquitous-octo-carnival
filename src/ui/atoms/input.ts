import styled, { css } from "styled-components";

const reset = css`
    outline: none;
`;

export const Input = styled.input`
    ${reset};

    padding: 0.625rem;
    border: 1px solid var(--color-border);
    border-radius: 5px;
`;
