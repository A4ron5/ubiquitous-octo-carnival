import * as React from "react";
import { useStore } from "effector-react";

import { Field, Logotype } from "ui/molecules";
import { Button } from "features/button";
import { Form, Link, Title } from "./ui/index";
import { Error } from "features/auth/error";

import { sendsay } from "lib/sendsay";

import {
    submitted,
    handleChanged,
    CheckAuthorizeGate,
    loginFx
} from "features/auth/model";

export const AuthForm = () => {
    const loginPending = useStore(loginFx.pending);

    return (
        <>
            <CheckAuthorizeGate />
            <Logotype />
            <Form onSubmit={submitted}>
                <Title
                    onClick={() => {
                        console.log(sendsay);
                    }}
                >
                    API-консолька
                </Title>
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
            <Link
                href="https://github.com/a4ron5"
                target="_blank"
                rel="noopener noreferrer"
            >
                @A4ron5
            </Link>
        </>
    );
};
