import { sample } from "effector";

import { login } from "api/login";
import { submitted, setField, loginFx, $form, $user } from "./index";

loginFx.use(login);

$user.on(loginFx.doneData, (_, payload) => payload);

$form.on(setField, (state, { key, value }) => ({
    ...state,
    [key]: value
}));

sample({ source: $form, clock: submitted, target: loginFx });

submitted.watch((e) => {
    e.preventDefault();
});
