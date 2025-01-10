import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/landing/landing.tsx"), route("registrarme", "routes/signup/signup.tsx"), route("matches/:phoneNumber", "routes/matches/matches.tsx")] satisfies RouteConfig;
