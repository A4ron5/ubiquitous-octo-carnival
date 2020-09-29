import * as React from "react";

import { Field, Logotype } from "ui/molecules";
import { Button } from "ui/atoms";
import { Form, Link, Title } from "./ui/index";
import { Error } from "features/auth/error";

export const AuthForm = () => {
    const error = { id: "error/auth/failed", explain: "wrong_credentials" };

    return (
        <>
            <Logotype />
            <Form>
                <Title>API-консолька</Title>
                <Error error={error} />
                <Field name="login" label="Логин" type="text" />
                <Field name="sublogin" label="Сублогин" type="text" optional />
                <Field name="password" label="Пароль" type="password" />
                <Button>Войти</Button>
            </Form>
            <Link href="https://github.com/a4ron5" target="_blank" rel="noopener noreferrer">
                @A4ron5
            </Link>
        </>
    );
};
