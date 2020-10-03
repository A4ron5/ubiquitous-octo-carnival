import { sendsay } from "lib/sendsay";

import { LoginParams, LoginResult } from "./types";

export const login = async (params: LoginParams): Promise<LoginResult> => {
    try {
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
