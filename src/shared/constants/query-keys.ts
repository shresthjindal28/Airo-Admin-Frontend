export const queryKeys = {
  admin: {
    me: ["admin", "me"] as const,
    doctors: ["admin", "doctors"] as const,
    doctorsPending: ["admin", "doctors", "pending"] as const,
    auditLogs: (params: Record<string, unknown>) =>
      ["admin", "audit-logs", params] as const,
  },
  dashboard: {
    admin: ["dashboard", "admin"] as const,
  },
  storage: {
    downloadUrl: (objectKey: string) =>
      ["storage", "download-url", objectKey] as const,
  },
} as const;
