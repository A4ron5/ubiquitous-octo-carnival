import * as React from "react";
import { useStore } from "effector-react";

import { Title } from "ui/atoms";
import { Field, Logotype } from "ui/molecules";
import { Button } from "features/button";
import { Form } from "./ui/index";
import { Error } from "features/auth-form/error";

import {
    submitted,
    handleChanged,
    CheckAuthorizeGate,
    loginFx
} from "features/auth-form/model";

export const AuthForm = () => {
    const loginPending = useStore(loginFx.pending);

    return (
        <>
            <CheckAuthorizeGate />
            <Logotype />
            <Form onSubmit={submitted}>
                <Title>API-консолька</Title>
                <Error />
                <Field
                    name="login"
                    label="Логин"
                    type="text"
                    handler={handleChanged}
                    required
                />
                <Field
                    name="sublogin"
                    label="Сублогин"
                    type="text"
                    handler={handleChanged}
                    optional
                />
                <Field
                    name="password"
                    label="Пароль"
                    type="password"
                    handler={handleChanged}
                    required
                />
                <Button pending={loginPending}>Войти</Button>
            </Form>
        </>
    );
};
