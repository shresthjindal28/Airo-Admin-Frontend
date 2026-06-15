"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { rolesConfig } from "@/config/roles.config";
import { useAuthStore } from "@/features/auth/store/auth.store";

type RequireAuthProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function RequireAuth({ children, fallback = null }: RequireAuthProps) {
  const router = useRouter();
  const { isAuthenticated, actorType, isHydrated } = useAuthStore();

  useEffect(() => {
    if (!isHydrated) return;

    if (!isAuthenticated || actorType !== "admin") {
      router.replace(rolesConfig.admin.loginRoute);
    }
  }, [actorType, isAuthenticated, isHydrated, router]);

  if (!isHydrated) {
    return <>{children}</>;
  }

  if (!isAuthenticated || actorType !== "admin") {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
