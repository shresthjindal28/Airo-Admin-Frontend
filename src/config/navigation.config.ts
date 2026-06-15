import {
  Activity,
  BriefcaseMedical,
  FileText,
  LayoutDashboard,
  ScrollText,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

import { routes } from "@/shared/constants/routes";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export const adminNavigation: NavItem[] = [
  { label: "Dashboard", href: routes.admin.dashboard, icon: LayoutDashboard },
  { label: "Doctors", href: routes.admin.doctors, icon: BriefcaseMedical },
  { label: "Verification", href: routes.admin.verification, icon: Users },
  { label: "AI Jobs", href: routes.admin.aiJobs, icon: FileText },
  { label: "Audit Logs", href: routes.admin.auditLogs, icon: ScrollText },
  { label: "System Health", href: routes.admin.systemHealth, icon: Activity },
  { label: "Settings", href: routes.admin.settings, icon: Settings },
];
