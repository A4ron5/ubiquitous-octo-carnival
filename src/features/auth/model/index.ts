import { ChangeEvent, FormEvent } from "react";
import { attach, createEffect, createEvent, createStore } from "effector";

import { sendsay } from "lib/sendsay";

type SubmittedEvent = FormEvent;
type SetFieldEvent = {
    key: string;
    value: string;
};

export const submitted = createEvent<SubmittedEvent>();
export const setField = createEvent<SetFieldEvent>();

export const loginFx = createEffect();
export const attachedLoginFx = attach({
    effect: loginFx,
    source: sendsay,
    mapParams: (params, source) => ({ params, sendsay: source })
});

export const $form = createStore({});
export const $user = createStore<{
    auth: boolean;
    error: { status: boolean; id?: string; explain?: string };
}>({ auth: false, error: { status: false } });

export const handleChanged = setField.prepend<ChangeEvent>((e) => ({
    key: (e.target as HTMLInputElement).name,
    value: (e.target as HTMLInputElement).value
}));

$user.watch(console.log);
$form.watch(console.log);
