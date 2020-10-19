import { sendsay } from "lib/sendsay";

import { AuthorizeParams, AuthorizeResult } from "./types";

export const authorize = async ({
    login,
    password,
    sublogin
}: AuthorizeParams): Promise<AuthorizeResult> => {
    try {
        const params = {
            login,
            password,
            sublogin
        };
        await sendsay.login(params);

        const user = {
            session: sendsay.session,
            login
        };
        localStorage.setItem("user", JSON.stringify(user));

        return {
            auth: "success",
            login
        };
    } catch (error) {
        if ("explain" in error && "id" in error) {
            const { id, explain } = error;

            return {
                auth: "failure",
                error: {
                    id,
                    explain
                }
            };
        } else {
            throw new Error(error);
        }
    }
};
