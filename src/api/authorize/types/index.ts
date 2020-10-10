type Success = {
    auth: true;
};

type Error = {
    auth: false;
    error: {
        explain: string;
        id: string;
    };
};

type NetworkError = never;

export type AuthorizeResult = Success | Error | NetworkError;

export type AuthorizeParams = {
    login: string;
    password: string;
    sublogin?: string;
};
