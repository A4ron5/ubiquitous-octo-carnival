import { ChangeEvent } from "react";
import {
    createEffect,
    createEvent,
    createStore,
    forward,
    sample
} from "effector";

import { request } from "api/request";
import { addRequest } from "features/history-line/model";

type RequestData = {
    data: string;
    error: boolean;
};

type SetFieldEvent = {
    value: string;
};

export const clickSendButton = createEvent<void>();
export const prettifyRequest = createEvent<void>();
export const setField = createEvent<SetFieldEvent>();
export const handleChanged = setField.prepend<ChangeEvent<HTMLTextAreaElement>>(
    (e) => ({
        value: e.target.value
    })
);

export const sendRequestFx = createEffect({ handler: request });
export const validateRequestFx = createEffect({
    handler: ({ data }: RequestData) => {
        const parsedRequest = JSON.parse(data);

        return parsedRequest;
    }
});
export const prettifyRequestFx = createEffect({
    handler: ({ data }: RequestData) => {
        const prettyfiedRequest = JSON.parse(JSON.stringify(data, null, "\t"));

        return prettyfiedRequest;
    }
});

export const $textarea = createStore<RequestData>({
    data: "",
    error: false
});

export const $output = createStore<string>("");

$textarea
    .on(setField, (state, { value }) => {
        return {
            data: value,
            error: false
        };
    })
    .on(validateRequestFx.fail, (state) => {
        return { ...state, error: true };
    })
    .on(prettifyRequestFx.doneData, (state, data) => {
        return { ...state, data };
    })
    .on(prettifyRequestFx.fail, (state) => {
        return { ...state, error: true };
    });

$output.on(sendRequestFx.doneData, (state, data) => {
    const prettify = JSON.stringify(data, null, "\t");

    return prettify;
});

sample({
    source: $textarea,
    clock: clickSendButton,
    target: validateRequestFx
});

forward({
    from: validateRequestFx.doneData,
    to: [sendRequestFx, addRequest]
});

sample({
    source: $textarea,
    clock: prettifyRequest,
    target: prettifyRequestFx
});

$output.watch(console.log);
