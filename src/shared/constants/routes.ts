export const routes = {
  home: "/",
  auth: {
    adminLogin: "/admin/login",
    adminSignup: "/admin/signup",
  },
  admin: {
    dashboard: "/admin/dashboard",
    doctors: "/admin/doctors",
    doctorDetail: (doctorId: string) => `/admin/doctors/${doctorId}`,
    verification: "/admin/verification",
    aiJobs: "/admin/ai-jobs",
    auditLogs: "/admin/audit-logs",
    systemHealth: "/admin/system-health",
    settings: "/admin/settings",
    settingsProfile: "/admin/settings/profile",
  },
} as const;
