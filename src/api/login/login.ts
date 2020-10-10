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

        return {
            auth: true
        };
    } catch (error) {
        if ("explain" in error && "id" in error) {
            const { id, explain } = error;

            return {
                auth: false,
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
