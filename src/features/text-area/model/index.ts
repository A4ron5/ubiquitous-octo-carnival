import {
    createEffect,
    createEvent,
    createStore,
    forward,
    sample
} from "effector";
import { ChangeEvent } from "react";
import { request } from "api/request";

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
    handler: ({ data }) => {
        const parsedRequest = JSON.parse(data);

        return parsedRequest;
    }
});
export const prettifyRequestFx = createEffect({
    handler: ({ data }) => {
        const prettifyRequest = JSON.parse(JSON.stringify(data, null, "\t"));

        return prettifyRequest;
    }
});

export const $textarea = createStore<RequestData>({
    data: "",
    error: false
});

export const $output = createStore<any>("");

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
    to: sendRequestFx
});

sample({
    source: $textarea,
    clock: prettifyRequest,
    target: prettifyRequestFx
});

$output.watch(console.log);
