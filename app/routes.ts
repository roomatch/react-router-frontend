import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("registrarme", "routes/signup.tsx")] satisfies RouteConfig;
