import { sample } from "effector";

import { login } from "api/login";
import {
    submitted,
    setField,
    loginFx,
    attachedLoginFx,
    $form,
    $user
} from "./index";

loginFx.use(login);

$user
    .on(loginFx.doneData, (_, payload) => payload)
    .on(loginFx.pending, (state) => ({ ...state, error: { status: false } }));

$form.on(setField, (state, { key, value }) => ({
    ...state,
    [key]: value
}));

sample({ source: $form, clock: submitted, target: attachedLoginFx });

submitted.watch((e) => {
    e.preventDefault();
});
