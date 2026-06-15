import { adminRefresh } from "@/features/auth/api/admin-auth.api";
import type { TokenResponse } from "@/lib/api/types/api-response.types";

export async function refreshAccessToken(
  refreshToken: string,
): Promise<TokenResponse> {
  return adminRefresh(refreshToken);
}
