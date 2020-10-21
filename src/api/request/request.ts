import { sendsay } from "lib/sendsay";

export const request = async (data) => {
    try {
        const res = await sendsay.request(data);

        return res;
    } catch (error) {
        return error;
    }
};
