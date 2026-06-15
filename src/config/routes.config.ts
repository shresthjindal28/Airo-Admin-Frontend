import type { Capability } from "@/shared/auth/permissions/capabilities";
import type { ActorType } from "@/types/domain/actor.types";

export type RouteAccess = {
  path: string;
  capabilities: Capability[];
  actors: ActorType[];
};

export const protectedRoutes: RouteAccess[] = [
  {
    path: "/admin",
    capabilities: ["admin:access"],
    actors: ["admin"],
  },
];
