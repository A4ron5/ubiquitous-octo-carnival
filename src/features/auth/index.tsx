import * as React from "react";

import { Field, Logotype } from "ui/molecules";
import { Button } from "ui/atoms";
import { Form, Link, Title } from "./ui/index";
import { Error } from "features/auth/error";

import { submitted, handleChanged } from "features/auth/model";

export const AuthForm = () => {
    const error = { id: "error/auth/failed", explain: "wrong_credentials" };

    return (
        <>
            <Logotype />
            <Form onSubmit={submitted}>
                <Title>API-консолька</Title>
                <Error error={error} />
                <Field
                    name="login"
                    label="Логин"
                    type="text"
                    handler={handleChanged}
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
                />
                <Button>Войти</Button>
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
