import * as React from "react";
import { useStore } from "effector-react";
import styled from "styled-components";

import { $user } from "features/auth-form/model";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 4.375rem;
    background: var(--color-error-background);
    border-radius: 5px;
    padding: 0.625rem;
    margin-bottom: 1.25rem;
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 1.125rem;
    margin: 0;
    color: var(--color-error-primary);
`;

const Message = styled.span`
    color: var(--color-error-secondary);
`;

export const Error = () => {
    const user = useStore($user);
    if ("error" in user) {
        return (
            <Wrapper>
                <Title>Вход не вышел</Title>
                <Message>{JSON.stringify(user.error)}</Message>
            </Wrapper>
        );
    }
    return null;
};
