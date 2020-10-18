import * as React from "react";

import { AuthForm } from "features/auth-form";
import { GithubLink } from "features/github";

import { LoginTemplate } from "ui/templates/login";

export const LoginPage = () => {
    return (
        <LoginTemplate>
            <AuthForm />
            <GithubLink />
        </LoginTemplate>
    );
};
