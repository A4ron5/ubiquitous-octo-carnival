import * as React from "react";
import { useStore } from "effector-react";

import { $user } from "features/auth-form/model";

import { Info } from "features/profile/ui";

export const Profile = () => {
    const user = useStore($user);

    if ("login" in user) {
        return <Info>{user.login}</Info>;
    }

    return null;
};
