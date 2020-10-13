import { sendsay } from "lib/sendsay";

import { AuthorizeResult } from "api/authorize/types";

export const checkAuthorize = async (): Promise<AuthorizeResult> => {
    const session = localStorage.getItem("sendsay-session");

    if (!session) {
        return { auth: null };
    }

    sendsay.setSession(session);

    return {
        auth: "success"
    };
};
