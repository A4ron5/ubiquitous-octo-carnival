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

export type LoginResult = Success | Error | NetworkError;

export type LoginParams = {
    params: {
        login: string;
        password: string;
        sublogin?: string;
    };
};
