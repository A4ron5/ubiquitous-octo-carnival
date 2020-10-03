import { ChangeEvent } from "react";
import { createEffect, createEvent, createStore } from "effector";

import { SubmittedEvent, SetFieldEvent } from "../types";
import { LoginParams, LoginResult } from "api/login/types";

export const submitted = createEvent<SubmittedEvent>();
export const setField = createEvent<SetFieldEvent>();

export const loginFx = createEffect<LoginParams, LoginResult>();

export const $form = createStore<{
    login?: string;
    password?: string;
    sublogin?: string;
}>({});
export const $user = createStore<{
    auth: boolean;
    error?: { explain?: string; id?: string };
}>({ auth: false });

export const handleChanged = setField.prepend<ChangeEvent>((e) => ({
    key: (e.target as HTMLInputElement).name,
    value: (e.target as HTMLInputElement).value
}));

$user.watch(console.log);
$form.watch(console.log);
