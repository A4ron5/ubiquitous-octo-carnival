import { sendsay } from "lib/sendsay";

import { AuthorizeResult } from "api/authorize/types";

export const checkAuthorize = async (): Promise<AuthorizeResult> => {
    const user = localStorage.getItem("user");

    if (!user) {
        return { auth: null };
    }

    const { session, login } = JSON.parse(user);

    sendsay.setSession(session);

    return {
        auth: "success",
        login
    };
};
