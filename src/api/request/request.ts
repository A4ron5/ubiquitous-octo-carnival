import { sendsay } from "lib/sendsay";

export const request = async (data: unknown) => {
    const res = await sendsay.request(data);

    return res;
};
