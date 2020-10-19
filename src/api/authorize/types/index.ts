type None = {
    auth: null;
};

type Success = {
    auth: "success";
    login: string;
};

type Error = {
    auth: "failure";
    error?: {
        explain: string;
        id: string;
    };
};

type NetworkError = never;

export type AuthorizeResult = None | Success | Error | NetworkError;

export type AuthorizeParams = {
    login: string;
    password: string;
    sublogin?: string;
};
