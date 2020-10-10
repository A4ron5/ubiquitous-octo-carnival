import { sendsay } from "lib/sendsay";

export const checkAuthorize = () => {
    const session = localStorage.getItem("sendsay-session");

    if (!session) {
        return { auth: false };
    }

    sendsay.setSession(session);
    return {
        auth: true
    };
};
