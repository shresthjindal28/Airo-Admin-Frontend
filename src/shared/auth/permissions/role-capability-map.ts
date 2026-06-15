import type { Capability } from "@/shared/auth/permissions/capabilities";
import type { ActorType } from "@/types/domain/actor.types";

export const roleCapabilityMap: Record<ActorType, Capability[]> = {
  admin: [
    "dashboard:view",
    "settings:read",
    "settings:write",
    "notifications:read",
    "admin:access",
    "admin:doctors:read",
    "admin:doctors:approve",
    "admin:ai-jobs:retry",
  ],
};

export function getCapabilitiesForRole(actorType: ActorType): Capability[] {
  return roleCapabilityMap[actorType];
}
