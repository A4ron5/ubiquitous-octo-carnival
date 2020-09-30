type Response = {
    auth: boolean;
    error: {
        status: boolean;
        explain?: string;
        id?: string;
    };
};

export const login = async ({ sendsay, params }): Promise<Response> => {
    try {
        await sendsay.login(params);

        return {
            auth: true,
            error: {
                status: false
            }
        };
    } catch (error) {
        if ("explain" in error && "id" in error) {
            const { id, explain } = error;

            return {
                auth: false,
                error: {
                    status: true,
                    id,
                    explain
                }
            };
        }
    }
};
