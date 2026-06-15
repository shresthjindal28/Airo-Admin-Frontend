import type { ActorType } from "@/types/domain/actor.types";

export const rolesConfig = {
  admin: {
    id: "admin" as const satisfies ActorType,
    label: "Admin",
    defaultRoute: "/admin/dashboard",
    loginRoute: "/admin/login",
  },
} as const;

export const actorTypes = Object.values(rolesConfig).map((role) => role.id);
