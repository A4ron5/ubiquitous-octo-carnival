import { ChangeEvent, FormEvent } from "react";
import { createEffect, createEvent, createStore, sample } from "effector";

import { AuthorizeParams, AuthorizeResult } from "api/login/types";
import { authorize } from "api/login";

type SetFieldEvent = {
    key: string;
    value: string;
};

export const submitted = createEvent<FormEvent>();
export const setField = createEvent<SetFieldEvent>();

export const loginFx = createEffect<AuthorizeParams, AuthorizeResult>({
    handler: authorize
});

export const $form = createStore<AuthorizeParams>({
    password: "",
    login: ""
});
export const $user = createStore<Partial<AuthorizeResult>>({ auth: false });

export const handleChanged = setField.prepend<ChangeEvent<HTMLInputElement>>(
    (e) => ({
        key: e.target.name,
        value: e.target.value
    })
);

$user.on(loginFx.doneData, (_, payload) => payload);

$form.on(setField, (state, { key, value }) => ({
    ...state,
    [key]: value
}));

sample({ source: $form, clock: submitted, target: loginFx });

submitted.watch((e) => {
    e.preventDefault();
});
