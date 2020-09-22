import React from "react";
import styled from "styled-components";

import { Field } from "ui/molecules";
import { Button } from "ui/atoms";

const Form = styled.form``;

export const AuthorizationForm = (props) => {
    const { buttonTitle } = props;

    return (
        <Form>
            <Field name="login" label="Логин" type="text" />
            <Field name="sub-login" label="Саблогин" type="text" />
            <Field name="password" label="Пароль" type="password" />
            <Button type="submit">{buttonTitle}</Button>
        </Form>
    );
};
