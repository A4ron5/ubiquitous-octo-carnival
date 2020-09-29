import * as React from "react";
import styled from "styled-components";

export const Centring = styled.main`
    & > div {
        margin: 10rem auto 2.5rem;
    }

    & > form {
        margin: 0 auto 1.25rem;
    }

    & > a {
        margin: 0 auto;
    }
`;

export const LoginTemplate = ({ children }) => <Centring>{children}</Centring>;
