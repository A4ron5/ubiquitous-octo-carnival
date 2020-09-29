import styled from "styled-components";

export const Form = styled.form`
    width: 32.5rem;
    min-height: 26.5rem;
    padding: 2.5rem 1.875rem;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    & > div {
        margin-bottom: 1.25rem;
    }
`;

export const Title = styled.h1`
    margin: 0 0 1.25rem;
    font-weight: normal;
    font-size: 1.5rem;
`;

export const Link = styled.a`
    display: block;
    width: fit-content;
    color: var(--color-font-secondary);
    text-decoration: none;

    &:hover {
        opacity: 0.9;
    }
`;
