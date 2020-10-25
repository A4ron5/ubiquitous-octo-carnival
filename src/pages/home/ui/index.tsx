import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 0.625rem 1rem;
    height: 50px;

    h1 {
        margin-left: 1.25rem;
        margin-right: auto;
    }

    h1 + div {
        margin-right: 1.25rem;
    }
`;

export const Main = styled.main`
    height: 100%;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--color-border);
    height: 70px;
    margin-top: auto;
`;
