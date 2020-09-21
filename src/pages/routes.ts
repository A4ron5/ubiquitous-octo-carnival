import { paths } from "pages/paths";
import { HomePage } from "pages/home";
import { LoginPage } from "pages/login";

export const routes = [
    {
        path: paths.login(),
        exact: true,
        component: LoginPage
    },
    {
        path: paths.home(),
        exact: true,
        component: HomePage
    }
];
