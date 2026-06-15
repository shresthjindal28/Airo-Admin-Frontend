"use client";

import type { ReactNode } from "react";

import { RequireAuth } from "@/shared/auth/guards/require-auth";

type RequireRoleProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function RequireRole({ children, fallback }: RequireRoleProps) {
  return <RequireAuth fallback={fallback}>{children}</RequireAuth>;
}
