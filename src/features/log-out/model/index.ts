import { history } from "lib/routing";
import { logout } from "features/auth-form/model";

export const handlerLogout = () => {
    localStorage.removeItem("user");
    logout();
    history.push("/login");
};
