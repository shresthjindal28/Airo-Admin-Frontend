import { AuthLayout } from "@/features/auth/components/auth-layout";
import { AdminLoginForm } from "@/features/auth/components/admin-login-form";

export default function AdminLoginPage() {
  return (
    <AuthLayout
      title="Admin sign in"
      description="Manage doctors, monitor AI jobs, and operate the platform."
    >
      <AdminLoginForm />
    </AuthLayout>
  );
}
