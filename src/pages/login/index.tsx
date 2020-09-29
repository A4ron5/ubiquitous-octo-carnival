import * as React from "react";

import { AuthForm } from "features/auth";
import { LoginTemplate } from "ui/templates/login";

export const LoginPage = () => {
    return (
        <LoginTemplate>
            <AuthForm />
        </LoginTemplate>
    );
};
