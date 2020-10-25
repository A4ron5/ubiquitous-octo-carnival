import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #f6f6f6;
`;

export const HomeTemplate: React.FC = ({ children }) => (
    <Container>{children}</Container>
);
