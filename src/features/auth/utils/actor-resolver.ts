import { rolesConfig } from "@/config/roles.config";

export function getDefaultRouteForActor(): string {
  return rolesConfig.admin.defaultRoute;
}

export function getLoginRouteForActor(): string {
  return rolesConfig.admin.loginRoute;
}
