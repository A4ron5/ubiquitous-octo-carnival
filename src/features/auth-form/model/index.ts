import { ChangeEvent, FormEvent } from "react";
import {
    createEffect,
    createEvent,
    createStore,
    sample,
    forward
} from "effector";
import { createGate } from "effector-react";

import { AuthorizeParams, AuthorizeResult } from "api/authorize/types";
import { authorize, checkAuthorize } from "api/authorize";
import { history } from "lib/routing";

type SetFieldEvent = {
    key: string;
    value: string;
};

export const submitted = createEvent<FormEvent>();
export const setField = createEvent<SetFieldEvent>();
export const resetForm = createEvent<void>();
export const logout = createEvent<void>();

export const loginFx = createEffect<AuthorizeParams, AuthorizeResult>({
    handler: authorize
});
const checkAuthorizeFx = createEffect({
    handler: checkAuthorize
});

export const $form = createStore<AuthorizeParams>({
    password: "",
    login: ""
});
export const $user = createStore<Partial<AuthorizeResult>>({ auth: null });

export const handleChanged = setField.prepend<ChangeEvent<HTMLInputElement>>(
    (e) => ({
        key: e.target.name,
        value: e.target.value
    })
);

export const CheckAuthorizeGate = createGate();

$user
    .on(loginFx.doneData, (_, payload) => payload)
    .on(checkAuthorizeFx.doneData, (_, payload) => payload)
    .reset([submitted, logout]);

$form
    .on(setField, (state, { key, value }) => ({
        ...state,
        [key]: value
    }))
    .reset(resetForm);

sample({ source: $form, clock: submitted, target: loginFx });

forward({
    from: CheckAuthorizeGate.open,
    to: checkAuthorizeFx
});

submitted.watch((e) => {
    e.preventDefault();
});

$user.watch((state) => {
    if (state.auth === "success") {
        history.push("/");
        resetForm();
    }
});
