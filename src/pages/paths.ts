type Pages = "login" | "home";

type Path = string;

export const paths: Record<Pages, Path> = {
    login: "/login",
    home: "/"
};
